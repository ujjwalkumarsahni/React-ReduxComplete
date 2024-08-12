const SearchBar = ({setquery}) => {
  return (
    <div className="search-container">
      <i className="fa-solid fa-magnifying-glass"></i>
      <input onChange={((e) => setquery(e.target.value.toLowerCase()))} type="text" placeholder="Search for a country..." />
    </div>
  )
}

export default SearchBar