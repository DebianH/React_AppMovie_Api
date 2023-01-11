import React from 'react'

const SearchBox = ({ searchTerm ,setSearchTerm}) => {
  return (
    <div className="col col-sm-4">
        <input type="text" className='form-control' placeholder="Search" onChange={e => setSearchTerm(e.target.value)}/>
    </div>
  )
}

export default SearchBox