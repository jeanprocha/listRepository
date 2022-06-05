import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity`
    background-color: #f0f0f0;
    border-width: 1px;
    border-color: #000;
    border-radius: 10px;
    padding: 10px 10px;
    margin: 10px 0px;
`

export const Title = styled.Text`
    font-size: 20px;
    color: #000;
    font-weight: 700;
    width: 70%;
`

export const Text = styled.Text`
    font-size: 16px;
    color: #000;
    font-weight: 400;
    font-style: italic;
`

export const Line = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 4px;
`