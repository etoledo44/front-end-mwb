import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import api from '../../services/api'
import {Container, Input, Card, Button} from '../styles/index'
import example from '../../assets/img/example.png';
import {FaChevronLeft, FaTrash} from 'react-icons/fa'
import '../global.css'
import './styles.css'
import {toast} from 'react-toastify'

// import { Container } from './styles';

export default function Detail() {
    const {barbershop} = useParams()
    const history = useHistory()

    const [name, setName] = useState('')
    const [cep, setCep] = useState('')
    const [street, setStreet] = useState('')
    const [number, setNumber] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')

    const user = localStorage.getItem('tkn')

    useEffect(()=>{
        api.get(`/barber/show/${barbershop}`).then(({data})=>{
            setName(data.name)
            setCep(data.cep)
            setStreet(data.street)
            setNumber(data.number)
            setCity(data.city)
            setState(data.state)
        }).catch(erro => console.log('erro', erro))
    }, [])

    function handleSubmit(e){
        e.preventDefault()
        let userInfo = JSON.parse(user)
        const barberInfo = {
            name,
            cep,
            street,
            number,
            city,
            state,
            id_user: userInfo.id_user
        }
        console.log(barbershop)

        api.post(`/barber/update/${barbershop}`, barberInfo, 
        {
            headers: {Authorization: userInfo.token}
        }).then(({data})=>{
            toast.success(data.message,
            {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 1500
            })

        }).catch(error=>{
            toast.success(error.message,
                {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 1500
                })
        })

    }

    function handleDelete(){
        const confirmDelete = window.confirm('Você deseja mesmo deletar?')

        if(confirmDelete){
            let userInfo = JSON.parse(user)
            let {id_user, token} = userInfo
            api.post(`/barber/delete/${barbershop}`, {id_user}, {
                headers: {Authorization: token}
            }).then(({data})=>{
                toast.info(data.message,
                    {
                        position: toast.POSITION.TOP_RIGHT,
                        autoClose: 1500
                    })
                history.push('/')
            }).catch(error=>{
                toast.error(error.message,
                    {
                        position: toast.POSITION.TOP_RIGHT,
                        autoClose: 1500
                    })
            })
        }else {
            return false
        }
    }
  return (
      <Container>
          <Card width="518px">
            <div className="back">
                <div>
                    <button onClick={()=>history.goBack()}>
                        <FaChevronLeft size={26}  />
                    </button>
                </div>
                <div>
                    <button onClick={()=>{handleDelete()}} >
                        <FaTrash size={24} color="red"  />
                    </button>
                </div>
            </div>
            <div className="card-content">
                <img src={example} alt={name}/>
                <form onSubmit={(e)=>handleSubmit(e)} >
                    <Input type="text" value={name} onChange={e=>setName(e.target.value)}/>
                    <Input type="text" value={cep} width="90px" onChange={e=>setCep(e.target.value)}/>
                    <Input type="text" value={street} onChange={e=>setStreet(e.target.value)}/>
                    <Input type="text" value={number} width="90px" onChange={e=>setNumber(e.target.value)}/>
                    <Input type="text" value={city} width="180px" onChange={e=>setCity(e.target.value)} />
                    <Input type="text" value={state} width="190px" onChange={e=>setState(e.target.value)} />

                    <Button type="submit">Salvar</Button>
                </form>
            </div>
          </Card>

      </Container>
    
  );
}
