import React from 'react'
import './Person.css'

const person = (props) => {
    return (
        <div className='box'>
            <p onClick={props.click}> I am {props.name} and i am {props.age}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
}

export default person;