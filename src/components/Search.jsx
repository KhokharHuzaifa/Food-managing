import React from 'react'
import { useState } from 'react'

const Search = (props) => {
    const {gettingSearchQuery} = props
    const [inputValue, setInputValue] = useState('')
    const handleInput = (e) => {
        setInputValue(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        gettingSearchQuery(inputValue)
        setInputValue('')
    }
  return (
    <div>
        <center>
            <form className="col-12 col-md-5 d-flex" onSubmit={handleSubmit}>
                <input type="text" className="form-control search-bar" placeholder="Search Recipes" value={inputValue} onChange={handleInput}/>
                <button className='btn btn-primary ms-3' type='submit'>Search</button>
            </form>
            </center>
    </div>
  )
}

export default Search