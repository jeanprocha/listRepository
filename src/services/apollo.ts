import {
    ApolloClient,
    InMemoryCache,
    gql,
    useLazyQuery
} from '@apollo/client'

export const client = new ApolloClient({
    uri: 'https://api.github.com/graphql',
    cache: new InMemoryCache(),
    headers: {
        authorization: `Bearer ${process.env.AUTHENTICATION}`
    }
});

export const GET_USER = gql`
    query ($name: String!) {
        user(login: $name) {
            login
            name
            createdAt
            url
            avatarUrl
            repositories(first: 100) {
                nodes {
                    name
                    description
                    url
                    primaryLanguage {
                        name
                    }
                }
            }
        }
    }
`

// export const useGraphql = () => ({
//     qrGetUser: async (userName: string) => {
//         const [ query, { data }] = useLazyQuery(GET_USER, { variables:{
//             name: userName
//         } })
//         await query()
//         return data
//     }
// })

