export default function Item({name,quantity,category}) {
return(

<div className="border border-emerald-400 m-4 p-2 w-screen max-w-xs bg-sky-300 text-black">
    <h3>{name}</h3>
    <p>Buy {quantity} in {category}</p>
</div>
)

}