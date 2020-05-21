import styled from 'styled-components'

const Container = styled.div`
    margin: 0 auto;
    width: 100%;
    max-width: 1120px;
    height: 100vh;
    background-color:  #E4E4E4;

    display: flex;
    align-items: center;
    justify-content: center;
`

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

const Card = styled.div`
    width: ${({width})=> width ? width : "800px" } ;
    height: ${({height})=> height ? height : "800px" } ;
    background: #FFFFFF;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: ${({justifyContent}) => justifyContent ? justifyContent : 'flex-start'};
    padding-bottom:5px
`

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

export {Container, Button, Card, Input}