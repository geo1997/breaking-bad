import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './components/userInterface/Header'
import CharacterGrid from './components/characters/CharacterGrid'
import Axios from 'axios';
import Search from './components/userInterface/Search'


function App() {
const [isLoading,setisLoading ] = useState([true])
const [values, setValues] = useState([])
const [query,setQuery] = useState('')

useEffect(() =>{

  const fetchItems = async () =>{
    const values = await Axios (`https://www.breakingbadapi.com/api/characters?name=${query}`)
  
  
 
  setValues(values.data)
  setisLoading(false)
}
fetchItems()
}
,[query])

  return (
    <div className="container">
    <Header/> 
    <Search getQuery={(q) => setQuery(q)}/>
    <CharacterGrid isLoading={isLoading} values={values}></CharacterGrid>
    </div>
  );
}

export default App;
