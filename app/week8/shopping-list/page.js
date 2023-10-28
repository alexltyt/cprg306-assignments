'use client'

import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import { useState } from "react";
import MealIdeas from "./meal-ideas";
import { useUserAuth,gitHubSignIn, firebaseSignOut } from "../_utils/auth-context";

export default function Page(){
    const [itemsArray, setItemsArray] = useState([...itemsData]);
    const [selectedItemName, setSelectedItemName] = useState(null);
    const {user, gitHubSignIn, firebaseSignOut} = useUserAuth();

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

   async function handleSignOut() {
        await firebaseSignOut();
    }

    async function handleSignIn(){
        await gitHubSignIn();
    }
    
    return (
        <main>
           <h2 className="text-5xl font-extrabold text-rose-600 m-3">Shopping List</h2>
           {user ? (<div className="flex">
                <div>
                    <NewItem onSubmit={handleSubmit}/> 
                    <ItemList itemsArray={itemsArray} onDelete={handleDelete} onItemSelect={handleItemSelect}/>
                </div>
                <div >
                    <MealIdeas ingredient={selectedItemName}/>
                </div>
                <button onClick={handleSignOut}>Sign Out</button>
           </div>):(
                <div>
                     <p>
                          Please sign in with GitHub.
                     </p>
                     <button onClick={gitHubSignIn}>Sign In</button>
                </div>
           )}
           
        </main>
    )
}