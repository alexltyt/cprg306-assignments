"use client";

import Item from './item.js';
import {useState } from 'react';

export default function ItemList({itemsArray, onDelete, onItemSelect}) {
    const buttonList = ["Name", "Category", "Grouped Category"];
    const [sortType, setSortType] = useState('name');

    if (itemsArray && itemsArray.length > 0) {
    let items = itemsArray;
    if (sortType === "name"){
        items.sort((a,b) => {
            if (a.name && b.name) {
                return a.name.localeCompare(b.name);
            } else {
                return 0;
            }
        });
    } else if (sortType === "category"||sortType === "grouped category"){
        items.sort((a,b) => {
            if (a.category && b.category) {
                return a.category.localeCompare(b.category);
            } else {
                return 0;
            }
        });
    } else if (sortType === "grouped category"){

    }}
    console.log('Item-list',itemsArray);

    function handleDelete(id){
        onDelete(id);
    };

    return (
        
        <div >
            <div className='p-5 gap-4'>
                Sorted By:
                {buttonList.map((button) => (<button key={button} onClick={()=>setSortType(button.toLowerCase())} 
                className={`m-1 ${sortType === button.toLowerCase() ? 'bg-blue-500' : 'bg-rose-600 hover:bg-rose-400 '} 
                text-black font-bold py-2 px-4 rounded text-sm`}
                >{button}</button>
                ))}            
            </div>
            <ul>
            
            {itemsArray.map((item,index,array) => {
                if(sortType==="name"||sortType==="category"){
                    return <Item key={item.id} id={item.id} name={item.name} quantity={item.quantity} category={item.category} onDelete={handleDelete} onSelect={onItemSelect}/>
                }else if(sortType==="grouped category"){
                    if (index === 0 || item.category !== array[index - 1].category) {
                        const capitalizedCategory = item.category.charAt(0).toUpperCase() + item.category.slice(1);
                        return (
                          <div key={item.id}>
                            <h3 className='text-3xl m-3'>{capitalizedCategory}</h3>
                            <div className='ml-6'>
                            <Item key={item.id} id={item.id} name={item.name} quantity={item.quantity} category={item.category} onDelete={handleDelete} onSelect={onItemSelect}/>
                            </div>
                          </div>
                        );
                      }
                      return (
                        <div className='m-6'key={item.name}>
                            <Item key={item.id} id={item.id} name={item.name} quantity={item.quantity} category={item.category} onDelete={handleDelete} onSelect={onItemSelect}/>
                        </div>
                        
                      );
                };
                
                })}
            </ul>
        </div>
    )

}