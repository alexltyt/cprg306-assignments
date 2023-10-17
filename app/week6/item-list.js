"use client";

import Item from './item.js';
import {useState } from 'react';

export default function ItemList({itemsArray, onDelete}) {
    const buttonList = ["Name", "Category", "Grouped Category"];
    const [sortType, setSortType] = useState('name');


    if (sortType === "name"){
        itemsArray.sort((a,b) => a.name.localeCompare(b.name));
    } else if (sortType === "category"||sortType === "grouped category"){
        itemsArray.sort((a,b) => a.category.localeCompare(b.category));
    } else if (sortType === "grouped category"){

    }

    function handleDelete(name){
        onDelete(name);
    };

    return (
        
        <div >
            <h2 className="text-5xl font-extrabold text-rose-600 m-3">Shopping List</h2>
            <div className='p-5 gap-4'>
                Sorted By:
                {buttonList.map((button) => (<button key={button} onClick={()=>setSortType(button.toLowerCase())} 
                className={`m-3 ${sortType === button.toLowerCase() ? 'bg-blue-500' : 'bg-rose-600 hover:bg-rose-400 '} 
                text-black font-bold py-2 px-4 rounded `}
                >{button}</button>
                ))}            
            </div>
            <ul>
            
            {itemsArray.map((item,index,array) => {
                if(sortType==="name"||sortType==="category"){
                    return <Item name={item.name} quantity={item.quantity} category={item.category} onDelete={handleDelete}/>
                }else if(sortType==="grouped category"){
                    if (index === 0 || item.category !== array[index - 1].category) {
                        const capitalizedCategory = item.category.charAt(0).toUpperCase() + item.category.slice(1);
                        return (
                          <div key={item.category}>
                            <h3 className='text-3xl m-3'>{capitalizedCategory}</h3>
                            <div className='ml-6'>
                            <Item key={item.name} name={item.name} quantity={item.quantity} category={item.category} onDelete={handleDelete}/>
                            </div>
                          </div>
                        );
                      }
                      return (
                        <div className='m-6'>
                            <Item key={item.name} name={item.name} quantity={item.quantity} category={item.category} onDelete={handleDelete}/>
                        </div>
                        
                      );
                };
                
                })}
            </ul>
        </div>
    )

}