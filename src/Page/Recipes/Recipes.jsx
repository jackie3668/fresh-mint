import React, { useState, useEffect } from 'react';
import './Recipes.css';
import axios from 'axios';
import arrow from '../../Asset/UI/arrow-right.png'
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
        'X-RapidAPI-Key': 'cb578e34aemshb27d4bdad3e28a3p1e7882jsn26dc61fb50d2',
        'X-RapidAPI-Host': 'food-recipes-with-images.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      setRecipes((response.data.d).slice(0, 40))
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
          <h1>This Month's Menu</h1>
          <h3>Scroll Down for More</h3>
        </div>
      </div>

      <div className="container">
        <h2>Explore by Category</h2>
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
              <img className='recipe-image' src={recipe.Image} alt=""  />
              <div>
                <h4>{recipe.Title} </h4>
                <div className="fs-show">
                    
                    <ul>
                  {Object.values(recipe.Ingredients).slice(0,4).map((ingredient, idx) => (
                    <li key={idx}>{ingredient}</li>
                  ))}
                </ul>
                </div>
              </div>
      
              <div className="content">
                <span className='bs-hide'>Ingredients:</span>
                <ul className='bs-hide'>
                  {Object.values(recipe.Ingredients).slice(0,4).map((ingredient, idx) => (
                    <li key={idx}>{ingredient}</li>
                  ))}
                </ul>
                <span>Instructions</span>
                <p>{recipe.Instructions}</p>
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
