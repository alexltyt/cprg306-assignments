'use client'

import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import { useState } from "react";
import MealIdeas from "./meal-ideas";

export default function Page(){
    const [itemsArray, setItemsArray] = useState([...itemsData]);
    const [selectedItemName, setSelectedItemName] = useState(null);

    function handleSubmit(item){
        alert(`Item on page: ${item.name} ${item.quantity} ${item.category}}`);
        setItemsArray([...itemsArray, item]);
    }

    function handleDelete(name){
        alert(`Item deleted: ${name}`);
        
        setItemsArray(itemsArray.filter((item) => item.name !== name));
    }

    function handleItemSelect(name){
        const cleanedName = name.split(" ")[0].replace(",","");
        setSelectedItemName(cleanedName);
        console.log(selectedItemName);
    }
    return (
        <main>
           <h2 className="text-5xl font-extrabold text-rose-600 m-3">Shopping List</h2>
           <div className="flex">
                <div>
                    <NewItem onSubmit={handleSubmit}/> 
                    <ItemList itemsArray={itemsArray} onDelete={handleDelete} onItemSelect={handleItemSelect}/>
                </div>
                <div >
                    <MealIdeas ingredient={selectedItemName}/>
                </div>
           </div>
        </main>
    )
}