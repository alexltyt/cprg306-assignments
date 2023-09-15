import Link from 'next/link';
import StudentInfo from '../StudentInfo/page';

export default function Page() {
    return <main> 
    <p className='text-7xl m-3 text-blue-400'>My Shopping List</p>
    <StudentInfo />
</main>;
}