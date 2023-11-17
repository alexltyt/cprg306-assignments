
import StudentInfo from "./StudentInfo/page"
import Link from 'next/link';

export default function Home() {
  return (
  <main>
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
    <p className="m-3 text-green-800" >
      <Link href="/week5">Week5</Link>
    </p>
    <p className="m-3 text-green-300" >
      <Link href="/week6">Week6</Link>
    </p>
    <p className="m-3 text-blue-300" >
      <Link href="/week7">Week7</Link>
    </p>
    <p className="m-3 text-purple-600" >
      <Link href="/week8">Week8</Link>
    </p>
    <p className="m-3 text-purple-300" >
      <Link href="/week10">Week10</Link>
    </p>
   </main>
  )
}
