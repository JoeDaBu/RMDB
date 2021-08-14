import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 70px;
    background: var(--medGrey);
    color: white;
`

export const Content = styled.div`
    display: flex;
    width: 100%;
    max-width: var(--maxWidth);
    padding: 0 20px;
    
    span {
        font-size: var(--fontMed);
        color: white;
        padding-right: 10px;

        @media screen and (maxWidth: 768px) {
            font-size: var(--fontSmall)
        }
    }
`

export const StyledLink = styled(Link)`
    text-decoration: none;
`

export const linkStyle = {
    textDecoration: "none"
}