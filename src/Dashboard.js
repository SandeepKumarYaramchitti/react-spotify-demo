import React, {useState} from 'react'
import {UseAuth} from './UseAuth'
import {Container, Form } from 'react-bootstrap'

export const Dashboard = ({code}) => {

    const accessToken = UseAuth(code)
    const [search, setSearch] = useState('');

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
        </Container>
    )
}
