export default function Item({name,quantity,category}) {
 return(
    <li className="m-3 p-2 bg-blue-950 w-72">
        <h3 className="text-lg">{name}</h3>
        <p>Buy {quantity} in {category}</p>
    </li>
 );
};
