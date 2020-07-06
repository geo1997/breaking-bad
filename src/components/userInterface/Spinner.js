import React from 'react'
import spiner from '../../images/spinner.gif'

function Spinner() {
    return (
       <img
       src={spiner}
       style={{
           width:'200px',
           margin:'auto',
           display:'block'
        
       }} alt='Loading'>
       </img>
    )
}

export default Spinner
