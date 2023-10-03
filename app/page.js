import StudentInfo from "./StudentInfo/page"
import Link from 'next/link';

export default function Home() {
  return <main>
    <StudentInfo/>
    <p className="m-3 text-rose-600" >
      <Link href="/week2">Week2</Link>
    </p>
    <p className="m-3 text-orange-600" >
      <Link href="/week3">Week3</Link>
    </p>
    <p className="m-3 text-yellow-400" >
      <Link href="/week4">Week4</Link>
    </p>
   </main>
  
}
