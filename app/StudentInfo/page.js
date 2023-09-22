import Link from "next/link";

export default function StudentInfo(){

    return (

        <main>
            <h1 className="m-3 text-4xl text-orange-500">CPRG 306: Web Development 2 - Assignments</h1>
            <br></br>
            <p className="m-3">Student Name: (Alex) Shek Yin Leung</p>
            <p className="m-3">Course Section: CPRG 206 C</p>
            <Link className="text-blue-800 m-3"href="https://github.com/alexltyt/cprg306-assignments">GitHubPage: https://github.com/alexltyt/cprg306-assignments</Link>
        </main>

    )

}