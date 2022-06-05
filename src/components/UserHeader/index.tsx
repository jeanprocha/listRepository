import React, { useContext } from "react";
import { Linking } from "react-native";
import { UserContext } from "../../context/User/userContext";

import { Container, Avatar, Title, Text, InfoCard, Link } from "./styles";

const UserHeader = () => {
    const { user } = useContext(UserContext)

    const handlePress = () => {
        Linking.openURL(user?.html_url!)
    }

    return (
        <Container>
            <Avatar
                source={{
                    uri: user?.avatar_url,
                }}
            />
            <InfoCard>
                <Title>{user?.name}</Title>
                <Text>
                    {user?.login}
                </Text>
                <Link onPress={handlePress}>
                    <Text>GitHub</Text>
                </Link>
            </InfoCard>
        </Container>
    )
}

export default UserHeader