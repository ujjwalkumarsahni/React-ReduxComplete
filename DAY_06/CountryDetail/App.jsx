import React from 'react'
import Header from './Components/Header'
import SearchBar from './Components/SearchBar'
import SelectMenu from './Components/SelectMenu'
import CountryList from './Components/CountryList'

import './App.css'
const App = () => {
  return (
    <>
    <Header />
    <main>
      <div className='search-filter-container'>
        <SearchBar />
        <SelectMenu />
      </div>
      <CountryList />
    </main>
    </>
  )
}

export default App
