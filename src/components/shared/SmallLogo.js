import styled from "styled-components";

export default function SmallLogo(){
    return(
        <Logo>
            Driven
            Books
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
    width: 80px;
    font-size: 26px;
    line-height: 26.5px;
`;
