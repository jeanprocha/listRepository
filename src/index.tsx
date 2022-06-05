import React from 'react'
import { ApolloProvider } from '@apollo/client'

import RenderUser from './components/RenderUser'
import SearchUser from './components/SearchUser'
import { UserProvider } from './context/User/userContext'
import { client } from './services/apollo'
import { Container } from './styles'

const App = () => {
    return (
        <ApolloProvider client={client}>
            <UserProvider>
                <Container>
                    <SearchUser />
                    <RenderUser />
                </Container>
            </UserProvider>
        </ApolloProvider>
    )
}

export default App