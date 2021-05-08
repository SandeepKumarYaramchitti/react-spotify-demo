import React, {useState, useEffect} from 'react'
import axios from 'axios'

export const UseAuth = (code) => {

    console.log('code is:', code);

    const [accessToken, setAccessToken] =  useState();
    const [refreshToken, setRefreshToken] = useState();
    const [expiresIn, setExpiresIn] = useState();

    useEffect(() => {
        axios.post('http://localhost:3002/login', {
            code,
        }).then(res => {
            console.log(res.data);
        }).catch(() => {
            // @ts-ignore
            // window.location = "/"
        })
        
    }, [code]);
}
