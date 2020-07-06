import React from 'react'
import CharacterItem from './CharacterItem'
import Spinner from '../userInterface/Spinner'

const CharacterGrid = ({isLoading,values}) => {
    return isLoading ? (
   <Spinner/>
    ):(
        <section className='cards'>
           {values.map((value) => (
                    <CharacterItem key={value.char_id}value={value}></CharacterItem>
                ))} 
        </section>
    )
}

export default CharacterGrid
