import React, { useContext } from 'react'
import { ActivityIndicator } from 'react-native'
import { UserContext } from '../../context/User/userContext'
import ListRepos from '../ListRepos'
import UserHeader from '../UserHeader'

import { Container, NotUser, View } from './styles'

const RenderUser = () => {
    const { user, loading } = useContext(UserContext)

    return (
        <Container>
            {loading ?
                <View>
                    <ActivityIndicator size={'large'} color={'#000'} />
                </View>
                :
                user ?
                    <>
                        <UserHeader />
                        <ListRepos />
                    </>
                    :
                    <View>
                        <NotUser>
                            Informe um usuário do GitHub!
                        </NotUser>
                    </View>
            }
        </Container>
    )
}

export default RenderUser