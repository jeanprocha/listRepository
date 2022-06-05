import React, { useState, useContext } from "react";
import { Alert, Keyboard } from "react-native";
import { UserContext } from "../../context/User/userContext";

import { Container, Title, InputUser, ButtonGetUser, ButtonText } from './styles'

const SearchUser = () => {
    const [userName, setUserName] = useState<string>('')
    const { user, getUser, getListRepos, stopLoading } = useContext(UserContext)

    const handlePress = async () => {
        if (userName && userName !== user?.login) {
            const response = await getUser(userName)

            if (!response) {
                setTimeout(() => {
                    stopLoading()
                    Alert.alert('Nenhum repositório encontrado!')
                }, 1000);

            } else {
                const response2 = await getListRepos(userName)
                if (!response2) {
                    Alert.alert('Nenhum repositório encontrado!')
                }
                Keyboard.dismiss()
                setTimeout(() => {
                    stopLoading()
                }, 1000);
            }
        }
    }

    return (
        <Container>
            <Title>Qual usuario buscar?</Title>
            <InputUser
                value={userName}
                onChangeText={setUserName}
            />
            <ButtonGetUser onPress={handlePress}>
                <ButtonText>Buscar</ButtonText>
            </ButtonGetUser>

        </Container>
    )
}

export default SearchUser