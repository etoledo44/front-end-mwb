import React from 'react'
import {Container, Card} from '../styles/index'
import '../global.css'
import './style.css'
import { useHistory } from 'react-router-dom'
const NotFound = () => {
    const history = useHistory()
    return(
        <Container>
            <Card justifyContent={'center'} className="card">
                <h1 className="lost">404</h1>
                <h1>Pô irmão, se perdeu do caminho?</h1>
                <button onClick={()=>history.goBack()}>Volta ai </button>
            </Card>
        </Container>
    )
}


export default NotFound