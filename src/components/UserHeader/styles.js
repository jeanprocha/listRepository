import styled from 'styled-components/native'

export const Container = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 10px;
`

export const InfoCard = styled.View`
    flex-direction: column;
    width: 64%;
`

export const Avatar = styled.Image`
    width: 100px;
    height: 100px;
    border-radius: 100px;
    border-width: 2px;
    border-color: #000;
`

export const Title = styled.Text`
    color: #000;
    font-size: 26px;
    font-weight: 800;
`

export const Text = styled.Text`
    color: #000;
    font-size: 22px;
    font-weight: 600;

`

export const Link = styled.TouchableOpacity`
    align-items: flex-end;
    padding-right: 10px;
    border-bottom-width: 1px;
    border-color: #000;
`