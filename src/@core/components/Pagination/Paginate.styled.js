import styled from "styled-components"

export const Button = styled.button`
    border: ${props => (props.skin === "dark" ? "white" : "black")};
`