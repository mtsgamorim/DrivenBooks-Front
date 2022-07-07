import styled from "styled-components";

const Input = styled.input`
    width:100%;
    height:58px;
    background-color: ${props=> props.color ? "#CDCDCD" : "var(--color-bg-input)"};
    border: 1px solid ${props=> props.color ? "#FAFAFA" : "#fff5de"};
    border-radius:4px;
    padding:14px;
    margin-bottom:8px;
    
    :first-child{
        margin-top:25px;
    }

    ::placeholder{
        color: var(--color-text-input);
        font-style:italic;
    }
`;

export default Input;