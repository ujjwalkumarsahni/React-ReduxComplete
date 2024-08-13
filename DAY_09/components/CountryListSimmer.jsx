import React from 'react'
import './CountryListSimmer.css'
const CountryListSimmer = () => {

    const mapped = Array.from({length: 20}).map((el,idx) =>{
        return  <div key={idx} className='country-card simmer-card'></div>
    })
  return (
    <div className='countries-container'>
         {mapped}
    </div>
  )
}

export default CountryListSimmer