import React, {useState, useEffect} from 'react'
import SpotifyWebAPI from 'react-spotify-web-playback'

export const Player = ({ accessToken, trackUri}) => {

    const [play, setPlay] = useState(false);

    useEffect(() => {
        setPlay(true)
    }, [trackUri])

    if (!accessToken) return null
    return (
        <SpotifyWebAPI
            token={accessToken}
            showSaveIcon
            callback={state => {
                if (!state.isPlaying) setPlay(false)
            }}
            play={play}
            uris={trackUri ? [trackUri] : []}
        >
            
        </SpotifyWebAPI>
    )
}
