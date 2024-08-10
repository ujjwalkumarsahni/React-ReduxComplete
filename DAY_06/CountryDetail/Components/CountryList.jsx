import React from 'react'
import CountryCard from './CountryCard'
import Data from '../Data.js'

const Array = Data.map((country) => {
    return <CountryCard
        key={country.name.common}
        name={country.name.common}
        flag={country.flags.svg}
        population={country.population}
        region={country.region}
        capital={country.capital?.[0]}
    />
})
const CountryList = () => {
    return (<>
        <div className='countries-container'>
            {Array}
        </div>
    </>
    )
}

export default CountryList