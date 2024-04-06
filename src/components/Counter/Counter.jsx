import React, { useState } from 'react'
import Button from '../UI/Button'
import {useSelector,useDispatch} from "react-redux"

const Counter = () => {
    // const [counter,setConter] = useState(0)
   const counter = useSelector( (store) =>store.counter)
   const dispatch = useDispatch()

    const handleIncrement = () => {
        // setConter(counter +1)
        dispatch({type:"INCREMENT"})
    }

    const handleDecrement = () => {
        // setConter(counter - 1)
        dispatch({type:"DECREMENT"})
    }

    const handleReset = () => {
        // setConter(0)
        dispatch({type:"RESET"})
    }

  return (
    <div>
    <Button onClick={handleDecrement}>-</Button>
     <span>{counter}</span>
    <Button onClick={handleIncrement}>+</Button>
    <Button onClick={handleReset}>reset</Button>
    </div>
  )
}

export default Counter