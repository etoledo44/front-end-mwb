import styled from 'styled-components'

const Button = styled.button`
    width: 280px;
    height: 40px;

    background: #000000;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    font: bold 14px Arial;
    border-width: 0;
    transition: 0.3s ease;

    &:hover {
        background-color: rgba(0, 0, 0, 0.70)
    }

`

export default Button