import React, { useEffect, useState } from 'react'
import CountryCard from './CountryCard'


const CountryList = ({query}) => {
    const [Data,setData] = useState([])

    useEffect(() =>{
        fetch('https://restcountries.com/v3.1/all')
        .then((res) => res.json())
        .then((e) =>{
            setData(e)
        })
    }, [])
    return (<>
        <div className="countries-container">
            {Data
                .filter((country) =>
                    country.name.common.toLowerCase().includes(query)
                )
                .map((country) => {
                    return (
                        <CountryCard
                            key={country.name.common}
                            name={country.name.common}
                            flag={country.flags.svg}
                            population={country.population}
                            region={country.region}
                            capital={country.capital?.[0]}
                        />
                    )
                })}
        </div>
    </>
    )
}

export default CountryList