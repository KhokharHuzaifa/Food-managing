import React, { useEffect, useState } from 'react'
import Search from '../components/Search'
import RecipeCard from '../components/RecipeCard';
import Favourites from '../components/Favourites';

const Hero = () => {

    const [loading, setLoading] = useState(false);
    const [recipes, setRecipes] = useState([]);
    const [query, setQuery] = useState('')
    const [favourite, setFavourite] = useState([])

    const gettingSearchResultData = async (data) => {
        setLoading(true)
        const apiData = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=e922507baa3548b6b29023c773d7a185&query=${data}`);
        const responseData = await apiData.json();
        const { results } = responseData
        setRecipes(results)
        setLoading(false)
        setQuery(data)
    }

    const addToFavourite = (favItem) => {
        const cpyfavourite = [...favourite]
        const index = cpyfavourite.findIndex((item) => item.id == favItem.id);
        if (index == -1) {
            cpyfavourite.push(favItem)
            setFavourite(cpyfavourite)
            localStorage.setItem('favourites', JSON.stringify(cpyfavourite))
        } else {
            alert('Already exist')
        }
    }

    useEffect(() => {
       const data = JSON.parse(localStorage.getItem('favourites'))
       if(data!=null){
        setFavourite(data)
       }
    }, [])

    const favRemove = (id) => {
        let cpyFav = [...favourite]
        const res = cpyFav.filter(item => item.id !== id)
        setFavourite(res)
        localStorage.setItem('favourites', JSON.stringify(res))
    }

    return (
        <div className='hero-section mt-5 container'>
            <Search gettingSearchQuery={gettingSearchResultData} />
            <Favourites handleData={favourite} handleRemove={favRemove} />
            {loading ? <center><h1 className="mt-5 mb-5">Loading...</h1></center> : null}
            {recipes && query ? <RecipeCard cardData={recipes} queryName={query} favRecipe={addToFavourite} /> : null}
        </div>
    )
}

export default Hero