'use client'

import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import { useUserAuth,gitHubSignIn, firebaseSignOut } from "../_utils/auth-context";
import { getItems,addItem,deleteItem } from "../_services/shopping-list-service";
import { useState,useEffect } from "react";


export default function Page(){
    const [itemsArray, setItemsArray] = useState([]);
    const [selectedItemName, setSelectedItemName] = useState(null);
    const {user, gitHubSignIn, firebaseSignOut} = useUserAuth();

    async function handleAddItem(item){
        alert(`Item added: ${item.name} ${item.quantity} ${item.category}`);
        const id = await addItem(user.uid, item);
        setItemsArray([...itemsArray, {...item, id}]);
        
    }

    async function handleDelete(id){
        alert(`Item deleted: ${id}`);
        await deleteItem(user.uid, id);
        
        setItemsArray(itemsArray.filter((item) => item.id !== id));
    }

    function handleItemSelect(name){
        const cleanedName = name.split(" ")[0].replace(",","");
        setSelectedItemName(cleanedName);
        console.log(selectedItemName);
    }

    function loadItems(){
        const fetchItems = async () => {
            const items = await getItems(user.uid);
            setItemsArray(items);
        };   
        fetchItems();
    }

    useEffect(() => {
        if(user){
            loadItems();
        }
    },[user]);


    

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
                    <NewItem onSubmit={handleAddItem}/> 
                    <ItemList itemsArray={itemsArray} onDelete={handleDelete} onItemSelect={handleItemSelect}/>
                <button onClick={handleSignOut}>Sign Out</button>
                </div>
                <div >
                    <MealIdeas ingredient={selectedItemName}/>
                </div>
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