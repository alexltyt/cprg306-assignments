import Link from 'next/link';
import ItemList from './item-list';
export default function Page() {
    return <main> 
    <p className='text-7xl m-4 p-5 text-blue-400 font-bold'>Shopping List</p>
    <ItemList />
    <Link href="/">Home</Link>
    </main>;
}