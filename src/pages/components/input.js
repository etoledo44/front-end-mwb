import styled from 'styled-components'

const Input = styled.input`
    width:${({width})=> width ? width : '280px'};
    height: 40px;

    padding:10px;
    margin-bottom:10px;
    margin-left: 5px;

    background: #D2D2D2;
    border: 1px solid #9B9B9B;
    box-sizing: border-box;
    border-radius: 5px;
`

export default Input