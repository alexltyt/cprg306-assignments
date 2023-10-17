'use client'

import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import { useState } from "react";

export default function Page(){
    const [itemsArray, setItemsArray] = useState([...itemsData]);

    function handleSubmit(item){
        alert(`Item on page: ${item.name} ${item.quantity} ${item.category}}`);
        setItemsArray([...itemsArray, item]);
    }

    function handleDelete(name){
        alert(`Item deleted: ${name}`);
        setItemsArray(itemsArray.filter((item) => item.name !== name));
    }

    return (
        <main>
            <NewItem onSubmit={handleSubmit}/> 
            <ItemList itemsArray={itemsArray} onDelete={handleDelete}/>
        </main>
    )
}