import React, {useState} from 'react'

const Search = ({getQuery}) => {

    const [searchText,setSearchText] = useState('')
    
    const onChange = (query) =>{
        setSearchText(query)
        getQuery(query)
    }

    return (
     <section className='search'>
         <form>
             <input type = 'text' 
             className='form-control'
             value={searchText}
             onChange={(e) => onChange(e.target.value)}
             placeholder='Search characters'
             autoFocus
             />
         </form>
     </section>
    )
}

export default Search
