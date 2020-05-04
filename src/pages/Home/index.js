import React, { useEffect, useState } from 'react';
import '../global.css'
import './styles.css'
import Container from '../components/container'
import Card from '../components/card'
import CardBarber from '../components/cardBarber'
import api from '../../services/api'


export default function Home() {
  const [barber, setBarbers] = useState([])
  const userResponse = localStorage.getItem('tkn')

  useEffect( ()=>{
    let userInfo = JSON.parse(userResponse)
    api.get('barber/show', {headers: {Authorization: userInfo.token}}).then(({data})=>{
      setBarbers(data)
    }).catch(error=>{
      console.error(error)
    })
  }, [])
  
  return (
    <Container>
      <Card width="890px" height="880px">
          <h1>Suas barbearias</h1>
        <div className="card-container">
          <CardBarber barbers={barber} /> 
        </div>
      </Card>
    </Container>
  );
}
