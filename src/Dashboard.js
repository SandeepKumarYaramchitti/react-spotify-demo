import React from 'react'
import {UseAuth} from './UseAuth'

export const Dashboard = ({code}) => {

    const accessToken = UseAuth(code)
    
    return (
        <div>
            {code}
        </div>
    )
}
