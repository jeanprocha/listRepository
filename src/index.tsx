import React from 'react'

import RenderUser from './components/RenderUser'
import SearchUser from './components/SearchUser'
import { UserProvider } from './context/User/userContext'

import { Container } from './styles'

const App = () => {
    return (
        <UserProvider>
            <Container>
                <SearchUser />
                <RenderUser />
            </Container>
        </UserProvider>
    )
}

export default App