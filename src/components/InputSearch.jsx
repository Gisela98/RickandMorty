import React from 'react'
import { useState } from 'react'

const InputSearch = ({setSearchLocation}) => {
    const searchLocation = e => {

    e.preventDefault()
    setSearchLocation(e.target.children[0].value)

    }

    return (
    <form onSubmit={searchLocation} className='search'>
        <input type="text"/>
        <button className='button'>search</button>
    </form>
    
  )
}

export default InputSearch