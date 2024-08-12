import React, {useState} from 'react'
import Header from './Components/Header'
import SearchBar from './Components/SearchBar'
import SelectMenu from './Components/SelectMenu'
import CountryList from './Components/CountryList'

import './App.css'
const App = () => {
  const [query,setquery] = useState('')
  return (
    <>
    <Header />
    <main>
      <div className='search-filter-container'>
        <SearchBar setquery={setquery}/>
        <SelectMenu />
      </div>
      <CountryList query={query}/>
    </main>
    </>
  )
}

export default App
