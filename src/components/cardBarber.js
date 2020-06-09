import React from 'react';
import {FaChevronRight} from 'react-icons/fa'
import imgExample from '../assets/img/example.png'
import { useHistory } from 'react-router-dom';

import '../pages/Barbershop/styles.css'



export default function CardBarber({barbers}) {
    const history =  useHistory()
  return (
      <>
      {barbers ? barbers.map(items=>{
          return (
        <div className="card-barbershop" key={items.id}>
                <div className="photo">
                <img src={imgExample} alt="barbearia wessex"/>
                </div>
                <div className="name">
                <p>{items.name}</p>
                <button  onClick={()=>history.push(`/user/barbershop/${items.name}/${items.id}`)}>
                    <FaChevronRight size={20}/>  
                </button>
                </div>
            </div>
          )
      }
      ) : <h2>Não há nenhuma barbearia</h2> }
      </>
  );
}
