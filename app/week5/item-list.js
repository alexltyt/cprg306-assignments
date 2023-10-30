"use client";
import items from './items.json';
import Item from './item.js';
import {useState } from 'react';

export default function ItemList() {
    const buttonList = ["Name", "Category", "Grouped Category"];
    const [sortType, setSortType] = useState('name');
    const sortedItems = [...items];

    if (sortType === "name"){
        sortedItems.sort((a,b) => a.name.localeCompare(b.name));
    } else if (sortType === "category"||sortType === "grouped category"){
        sortedItems.sort((a,b) => a.category.localeCompare(b.category));
    } else if (sortType === "grouped category"){

    }

    return (
        <div >
            <h2 className="text-5xl font-extrabold text-rose-600 m-3">Shopping List</h2>
            <div className='p-5 gap-4'>
                Sorted By:
                {buttonList.map((button) => (<button key={button} onClick={()=> setSortType(button.toLowerCase())} className={`m-3 bg-rose-600 hover:bg-rose-400 
                text-white font-bold py-2 px-4 rounded ${sortType === button.toLowerCase() ? 'bg-blue-700' : ''}`}
                >{button}</button>
                ))}            
            </div>
            <ul>
            
            {sortedItems.map((item,index,array) => {
                if(sortType==="name"||sortType==="category"){
                    return <Item key={item.name} name={item.name} quantity={item.quantity} category={item.category} />
                }else if(sortType==="grouped category"){
                    if (index === 0 || item.category !== array[index - 1].category) {
                        const capitalizedCategory = item.category.charAt(0).toUpperCase() + item.category.slice(1);
                        return (
                          <div key={item.category}>
                            <h3 className='text-3xl m-3'>{capitalizedCategory}</h3>
                            <div className='ml-6'>
                            <Item key={item.name} name={item.name} quantity={item.quantity} category={item.category} />
                            </div>
                          </div>
                        );
                      }
                      return (
                        <div className='m-6' key={item.name}>
                            <Item key={item.name} name={item.name} quantity={item.quantity} category={item.category} />
                        </div>
                        
                      );
                };
                
                })}
            </ul>
        </div>
    )

}