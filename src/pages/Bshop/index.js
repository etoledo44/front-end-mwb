import React, { useEffect, useState } from 'react';
import '../global.css'
import './styles.css'
import {Container, Card} from '../styles/index'

import api from '../../services/api'
import {FaChevronRight, FaWhatsapp} from 'react-icons/fa'
import imgExample from '../../assets/img/example.png'
import Scrollbar from 'react-scrollbars-custom'
import {useAuth} from '../../contexts/auth'

export default function Bshop() {
  document.title="Barbearias"
  const [barber, setBarbers] = useState(null)
  
  const {teste} = useAuth()
  console.log(teste)
  useEffect( ()=>{
    api.get('/').then(({data})=>{
      setBarbers(data)
    }).catch(error=>{
      console.error(error)
    })
  }, [])
  
  return (
    <Container>
      <Card width="890px" height="880px">
          <h1>Barbearias</h1>
            <Scrollbar >
                <div className="card-container">
                    {barber ? barber.map(items=>{
                        return(
                            <div className="card-barbershop" key={Math.random()}>
                                <div className="photo">
                                <img src={imgExample} alt="barbearia wessex"/>
                                </div>
                                <div className="name">
                                <p>{items.name} <br/> {items.city}/{items.street}</p>
                                <button >
                                    <a 
                                    href={`https://api.whatsapp.com/send?phone=55${items.phone}&text=Hey%20bro%2C%20vi%20sua%20barbearia%20*${items.name}*%20no%20*heybeardman*!%20Tem%20hor%C3%A1rio%20dispon%C3%ADvel%20a%C3%AD%3F`} 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >
                                      <FaWhatsapp size={25} color="green"/>
                                    </a>
                                </button>
                                <button >
                                    <FaChevronRight size={20}/>  
                                </button>
                                </div>
                            </div>
                        )
                    }) : <p>Nenhuma barbearia para exibir</p>}
                </div>
            </Scrollbar>
      </Card>
    </Container>
  );
}
