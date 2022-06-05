import React from "react";
import { Linking } from "react-native";

import { Container, Title, Text, Line } from "./styles";

type Props = { 
    name: string;
    html_url: string;
    description: string;
    language: string;
}

const ItemRepos = (repo: Props) => {
    const handlePress = () => {
        Linking.openURL(repo.html_url)
    }

    return (
        <Container onPress={handlePress}>
            <Line>
                <Title>{repo.name}</Title>
                <Text>{repo.language}</Text>
            </Line>
            <Text>{repo.description}</Text>
        </Container>
    )
}

export default ItemRepos