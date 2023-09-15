import StudentInfo from "./StudentInfo/page"
import Link from 'next/link';

export default function Home() {
  return <main>
    <StudentInfo/>
    <p className="m-3" >
    <Link href="/week2">Week2</Link>
    </p>
   </main>
  
}
