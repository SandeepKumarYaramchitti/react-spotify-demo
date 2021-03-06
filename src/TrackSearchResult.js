import React from 'react'

export const TrackSearchResult = ({track, chooseTrack}) => {

    const handlePlay = () => {
        chooseTrack(track)
    }
    return (
        <div 
            className="d-flex m-2 align-content-center"
            style={{cursor: 'pointer'}}
            onClick={handlePlay}
        >
            <img src={track.albumUrl} alt={track} style={{height: '64px', width: '64px'}} />
            <div className="ml-3">
                <div>{track.title}</div>
                <div className="text-muted">{track.artist}</div>
            </div>
        </div>
    )
}
