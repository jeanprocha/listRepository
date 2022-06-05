import React, { useState, useContext } from 'react';
import { Alert, Keyboard } from "react-native";
import { UserContext } from "../../context/User/userContext";
import { useLazyQuery } from '@apollo/client';
import { Container, Title, InputUser, ButtonGetUser, ButtonText } from './styles'

import { User, Repos} from '../../types'

import { GET_USER } from '../../services/apollo';

const SearchUser = () => {
    const [userName, setUserName] = useState<string>('jeanprocha')
    const { user, getUser, getListRepos, stopLoading, setNewUser } = useContext(UserContext)

    const [funcao, { data }] = useLazyQuery(GET_USER, {
        variables: {
            name: userName
        }
    })

    const handlePress = async () => {
        if (userName && userName !== user?.login) {
            const response = await getUser(userName)

            if (!response) {
                setTimeout(() => {
                    stopLoading(false)
                    Alert.alert('Nenhum repositório encontrado!')
                }, 1000);

            } else {
                const response2 = await getListRepos(userName)
                if (!response2) {
                    Alert.alert('Nenhum repositório encontrado!')
                }
                Keyboard.dismiss()
                setTimeout(() => {
                    stopLoading(false)
                }, 1000);
            }
        }
    }

    const handlePressGraphQL = async () => {
        if (userName && userName !== user?.login) {
            stopLoading(true)

            await funcao()
                .then((res) => {
                    const user: User = {
                        name: res.data?.user.name,
                        html_url: res.data?.user.url,
                        email: res.data?.user.email,
                        login: res.data?.user.login,
                        avatar_url: res.data?.user.avatarUrl
                    }

                    const repo: Repos[] = []
                    let array = res.data?.user?.repositories?.nodes

                    for (let i = 0; i < array.length; i++) {
                        repo.push({
                            name: array[i].name,
                            html_url: array[i].url,
                            description: array[i].description,
                            language: array[i].primaryLanguage?.name
                        });
                    }
                    setNewUser(user, repo)
                })
                .catch((err) => { setNewUser(null, []) })
                .finally(() => {
                    Keyboard.dismiss()
                    setTimeout(() => {
                        stopLoading(false)
                    }, 1000);
                })
        }
    }

    return (
        <Container>
            <Title>Qual usuario buscar?</Title>
            <InputUser
                value={userName}
                onChangeText={setUserName}
            />
            <ButtonGetUser onPress={handlePressGraphQL}>
                <ButtonText>Buscar</ButtonText>
            </ButtonGetUser>

        </Container>
    )
}

export default SearchUser