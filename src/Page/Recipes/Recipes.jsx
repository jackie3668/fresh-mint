import React, { useState, useEffect } from 'react';
import './Recipes.css';
import axios from 'axios';
import arrow from '../../Asset/UI/arrow-right.png'
import Countdown from '../../Component/Countdown/Countdown';
import Newsletter from '../../Component/Newsletter/Newsletter';

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [activeIndex, setActiveIndex] = useState()
  const [tag, setTag] = useState('chicken')
  const categories = ['Chicken', 'Beef', 'Vegan', 'Noodles', 'Soup', 'Salad', 'Dessert'];


  const fetchRecipes = async (query) => {
    const options = {
      method: 'GET',
      url: 'https://food-recipes-with-images.p.rapidapi.com/',
      params: {q: query},
      headers: {
        'X-RapidAPI-Key': '11508c4a15msh9a6b1b310d5c085p1f0406jsn3028f9f76d6e',
        'X-RapidAPI-Host': 'food-recipes-with-images.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      setRecipes((response.data.d).slice(0, 12))
    } catch (error) {
      console.error(error);
    }
  };

  
  useEffect(() => {
    fetchRecipes(tag)
  }, [tag]); 

  return (
    <div className='recipes'>
      <div className="banner">
        <div className="hero-content">
          <h1>Our In House Recipes</h1>
          <h3>Scroll Down to Get Inspired</h3>
        </div>
      </div>

      <div className="container">
        <h2>Explore Trending Tags</h2>
        <div>
          <ul className='tags'>
            {categories.map((category) => (
              <li key={category} onClick={() => setTag(category)} className={tag === category ? 'active' : ''}>{category}</li>
            ))}
          </ul>
        </div>
        <div className="recipes-list">
          {recipes.map((recipe, index) => (
            <div key={index} className={index===activeIndex ? 'recipe-wrapper active': 'recipe-wrapper'}>
              <img src={recipe.Image} alt="" onMouseEnter={()=>setActiveIndex(index)} onMouseLeave={()=>setActiveIndex(-1)}/>
              <h4>{recipe.Title} <img src={arrow} alt="" className='arrow hidden'/></h4>
              <div className="content">
                <span>Ingredients:</span>
                <ul>
                  {Object.values(recipe.Ingredients).slice(0,3).map((ingredient, idx) => (
                    <li key={idx}>{ingredient}</li>
                  ))}
                </ul>
                <p>{recipe.Instructions.slice(0,85)} <span>see full recipe</span></p>
              </div>

            </div>
            ))}
        </div>
      </div>
      <Newsletter />
    </div>
  );
}

export default Recipes;
