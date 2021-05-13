import React from 'react'
import SpotifyWebAPI from 'react-spotify-web-playback'

export const Player = ({ accessToken, trackUri}) => {
    return (
        <SpotifyWebAPI
            token={accessToken}
            showSaveIcon
            uris={trackUri}
        >
            
        </SpotifyWebAPI>
    )
}
