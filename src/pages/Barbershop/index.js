import React, { useEffect, useState } from 'react';
import {useAuth} from '../../contexts/auth'
import '../global.css'
import './styles.css'

import {Container, Card} from '../styles/index'

import CardBarber from '../../components/cardBarber'
import api from '../../services/api'
import Scrollbar from 'react-scrollbars-custom'
import { FaPlus } from "react-icons/fa";
import {AiOutlineLogout} from 'react-icons/ai'
import { useHistory } from 'react-router-dom';


export default function Barbershop() {
  const [barber, setBarbers] = useState(null)
  const {token, user, logOut} = useAuth()

  const history = useHistory()

  useEffect( ()=>{
    function loadBarber(){
      api.get('barber/show', {headers: {Authorization: token}}).then(({data})=>{
        setBarbers(data)
      }).catch(error=>{
        console.error(error)
      })
    }
    loadBarber()
  }, [barber])
  
  return (
    <Container>
      <Card width="890px" height="880px">
        <div className="header">
          <div>
            <h1>Suas barbearias</h1>
          </div>
            <button onClick={logOut}><AiOutlineLogout color="red" size={23}/></button>
        </div>
        <Scrollbar>
        <div className="card-container">
          <CardBarber barbers={barber} /> 
        </div>
        </Scrollbar>
      </Card>
    </Container>
  );
}
