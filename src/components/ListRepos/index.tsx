import React, { useContext } from "react";
import { ScrollView } from "react-native";
import { UserContext } from "../../context/User/userContext";
import ItemRepos from "../ItemRepos";

import { Container, Text } from "./styles";

const ListRepos = () => {
    const { listRepos } = useContext(UserContext)

    return (
        <Container>
            {listRepos.length ?
                <ScrollView>
                    {listRepos.map((item, key: number) =>
                        <ItemRepos key={key} description={item.description} html_url={item.html_url} language={item.language} name={item.name} />
                    )}
                </ScrollView>
                :
                <Text>Nenhum repositório disponível!</Text>
            }
        </Container>
    )
}

export default ListRepos