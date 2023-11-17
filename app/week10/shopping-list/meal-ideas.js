"use client"
import {useState,useEffect} from 'react';

async function fetchMealIdeas(ingredient){
    try{
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        const data = await response.json();
        console.log(data);
        return data.meals || [];
    }catch(error){
        console.log("Error: "+error);
        return [];
    }
}

export default function MealIdeas({ingredient}){

    const [meals, setMeals] = useState([]);

    async function loadMealIdeas(){
        const mealsData = await fetchMealIdeas(ingredient);
        setMeals(mealsData);
    }

    useEffect(() => {
        loadMealIdeas();
    },[ingredient]);

    return(
        <div>
            <h2 className='text-3xl text-yellow-400'>
                Meal Ideas
            </h2>
            {meals.length >0 ? (
                meals.map((meal) => (
                <div key={meal.idMeal}>
                    <h3 className='text-lg'>{meal.strMeal}</h3>
                    <img className="w-20" src={meal.strMealThumb} alt={meal.strMeal}/>
                </div>))
                ) : (
                    <p className="text-xl text-gray-500">No meals found for the {ingredient}.</p>
            )}
        </div>
    );

}