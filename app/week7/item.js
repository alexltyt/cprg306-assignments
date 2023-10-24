export default function Item({name,quantity,category,onDelete}) {
 return(
    <li className="m-3 p-2 bg-blue-950 w-72 flex justify-between items-center">
        <div>
        <h3 className="text-lg">{name}</h3>
        <p>Buy {quantity} in {category}</p>
        </div>
        <button onClick={()=>onDelete(name)} className="bg-red-500 hover:bg-red-700 text-white text-xs p-1 rounded h-6">Delete</button>

    </li>
 );
};
