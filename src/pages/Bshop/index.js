import React, { useEffect, useState } from 'react';
import '../global.css'
import './styles.css'
import Container from '../components/container'
import Card from '../components/card'
import api from '../../services/api'
import {FaChevronRight, FaWhatsapp, FaClosedCaptioning} from 'react-icons/fa'
import imgExample from '../../assets/img/example.png'
import Scrollbar from 'react-scrollbars-custom'


export default function Bshop() {
  const [barber, setBarbers] = useState([])
  

  useEffect( ()=>{
    api.get('/').then(({data})=>{
        console.log(data);
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
                            <div className="card-barbershop" >
                                <div className="photo">
                                <img src={imgExample} alt="barbearia wessex"/>
                                </div>
                                <div className="name">
                                <p>{items.name} <br/> {items.city}/{items.street}</p>
                                <button >
                                    <a 
                                    href={`https://api.whatsapp.com/send?phone=55${items.phone}&text=Hey%20barba%2C%20vim%20pelo%20site!%20Tem%20hor%C3%A1rio%20dispon%C3%ADvel%3F`} 
                                    target="_blank">
                                        <FaWhatsapp size={25} color="green"/>
                                    </a>
                                    
                                </button>
                                <button >
                                    <FaChevronRight size={20}/>  
                                </button>
                                </div>
                            </div>

                        )
                    }) : <p>Nenhuma barberia para exibir</p>}
                </div>
            </Scrollbar>
      </Card>
    </Container>
  );
}
