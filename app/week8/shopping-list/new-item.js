import { useState } from "react";
import Item from "./item";

export default function NewItem({onSubmit}) {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

    const handleSubmit = (event) =>{
        event.preventDefault();
        const Item = {name, quantity, category};
        onSubmit(Item);
        // alert(`Item: ${name} ${quantity} ${category}`);
        setName("");
        setQuantity(1);
        setCategory("produce");
    };

    return (
        <>
        <div className="flex flex-col m-3  ">

            <form onSubmit={handleSubmit} className=" text-black bg-blue-950 w-4/5 p-3 rounded-xl">
                <input type="text" 
                    className="w-full m-1 rounded-lg h-10 p-2" 
                    placeholder="Item Name"
                    value={name} 
                    onChange={(event) => setName(event.target.value)} 
                    required />
                <div className="flex flex-row justify-between">

                <input type="text" 
                    className="m-1 w-16 rounded-lg h-10 p-2" 
                    value={quantity} 
                    onChange={(event) => setQuantity(event.target.value)} 
                    min="1" max="99" 
                    required/>
                <select className="m-1 w-28 h-10 rounded-lg p-2" 
                    value={category} 
                    onChange={(event) => setCategory(event.target.value)} 
                    required>

                    <option value="produce">Produce</option>
                    <option value="diary">Diary</option>
                    <option value="bakery">Bakery</option>
                    <option value="meat">Meat</option>
                    <option value="forzenFood">Frozen Food</option>
                    <option value="cannedGoods">Canned Goods</option>
                    <option value="dryGoods">Dry Goods</option>
                    <option value="beverages">Beverages</option>
                    <option value="snacks">Snacks</option>
                    <option value="household">Household</option>
                    <option value="other">Other</option>

                </select>
                    </div>
                    <div className="bg-blue-500 rounded-lg text-center text-white h-10 m-auto flex justify-center items-center">
                        <button type="submit">+</button>
                    </div>
            </form>

        </div>
        </>
    );
};
