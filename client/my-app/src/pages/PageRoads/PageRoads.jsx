import React, { useState } from 'react'
import Roads from '../../components/Roads/Roads'
import {Box, TextField, Button} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


export default function PageRoads() {

  const [show, setShow] = useState(false)

  const handlerShow = () => {
    setShow(!show);
  }

  const inputs = useSelector(store => store.inputs);
  const user = useSelector(store => store.user);
  const error = useSelector(store => store.error);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInputs = (event) => {
    dispatch({type: 'INPUTS_TYPING', payload: {[event.target.name]: event.target.value}})
  }

  const createNewRoad = async (event) => {
      const data = {
        distance: inputs.distance,
        from: inputs.from,
        destination: inputs.destination,
        discription: inputs.discription,
        userId: user.userId
      };

      const response = await fetch('http://localhost:3001/roads', {
        method: 'POST',
        headers:{
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const road = await response.json();

      if(road.error) {
        dispatch({type: 'SET_ERROR', payload: road});
      } else {
        console.log(road.road.id);
        dispatch({type: 'INPUTS_CLEAR', payload: {}});
        dispatch({type: 'SET_ERROR', payload: {}});
        navigate(`/roads/${road.road.id}`);
      }
  }


  return (
    <>
      
      <Button variant="outlined" type='submit' onClick={ handlerShow }
       style={{ margin: '67px 837px 28px', width: '175px' }}>Свой маршрут</Button>
      {show && 
      <div>
<<<<<<< HEAD
        <Box style={{ display: 'flex', justifyContent: 'center' }}
=======
        <div  style={{ color: 'red' }}>
          <div>{error.error}</div>
        </div>
        <Box
>>>>>>> b2a82cea2f0f6a06b86b9c6a5ae5d595073dcbea
          component="form"
          sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
          >
          <TextField 
          id="outlined-basic" 
          label="Город отправления" 
          variant="outlined" 
          name='from' 
          onChange={handleInputs} 
          value={inputs.from?? ''}
          required
          />
          <TextField 
          id="outlined-basic" 
          label="Город прибытия" 
          variant="outlined" 
          name='destination' 
          onChange={handleInputs} 
          value={inputs.destination?? ''}
          required
          />
          <TextField 
          id="outlined-basic" 
          label="Описание" 
          variant="outlined" 
          name='discription' 
          onChange={handleInputs} 
          value={inputs.discription?? ''}
          required
          />
          <TextField 
          id="outlined-basic" 
          label="Расстояние (км)" 
          variant="outlined" 
          name='distance' 
          onChange={handleInputs} 
          value={inputs.distance?? ''}
          required
          />
          <Button variant="text" sx={{height: '55px'}} onClick={createNewRoad}>Создать</Button>
        </Box> 
      </div>}
      <Roads />
    </>
  )
}
