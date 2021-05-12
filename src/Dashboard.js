import React, {useState, useEffect} from 'react'
import {UseAuth} from './UseAuth'
import {Container, Form } from 'react-bootstrap'
import SpotifyWebAPI from 'spotify-web-api-node'
import {TrackSearchResult} from './TrackSearchResult'

const spotifyWebAPI = new SpotifyWebAPI({
    clientId: '31e1e3c1414a4f43a7706d6abca36f74'
})

export const Dashboard = ({code}) => {

    const accessToken = UseAuth(code)
    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    console.log(searchResults);

    useEffect(() => {
        if (!accessToken) return;
        spotifyWebAPI.setAccessToken(accessToken)
    }, [accessToken])

    useEffect(() => {
        if (!search) return setSearchResults([]);
        if (!accessToken) return
        let cancel = false;
        spotifyWebAPI.searchTracks(search)
        .then(res => {
           if (cancel) return 
           setSearchResults(res.body.tracks.items.map(track => {
                const smallestAlbumImages = track.album.images.reduce(
                    (smallest, image) => {
                        if (image.height < smallest.height) return image;
                        return smallest;
                }, track.album.images[0])

                return {
                    artist: track.artists[0].name,
                    title: track.name,
                    uri: track.uri,
                    albumUrl: smallestAlbumImages.url
                }
            }))

            return () => cancel = true
        }, (error) => {
            console.log('Search by:', error);
        })

    }, [search, accessToken])

    return (
        <Container className="d-flex flex-column py-2" style={{
            height: "100vh"
        }}>
            <Form.Control 
                type="search"
                placeholder="Search Songs and Artist"
                value={search}
                onChange={e => setSearch(e.target.value)}
            />
            <div className="flex-grow-1 my-2" style={{ overflowY: 'auto'}}>{searchResults.map(track => (
                <TrackSearchResult track={track} key={track.uri}/>
            ))}</div>
        </Container>
    )
}
