import styled from "styled-components";

export default function LargeLogo(){
    return(
        <Logo>
            DrivenBooks
        </Logo>
    );
}

const Logo = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    font-family: 'Sancreek', cursive;
    /* color: var(--color-text); */
    color:#FFF;
    width: 147px;
    height: 50px;
    font-size: 40px;
    line-height: 50px;
`;