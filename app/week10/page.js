
"use client"
import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

export default function Page() {
    const {user, gitHubSignIn, firebaseSignOut} = useUserAuth();
    console.log("User is: ", user);

    async function handleSignIn(){
        await gitHubSignIn();
    }

    async function handleSignOut() {
        await firebaseSignOut();
    }



    return <main> 
        <h1>Week 10</h1>
        {!user && (
            <p>
                Please sign in with GitHub.
            </p>
        )}
        {user ? (
            <div>
            <p>Hi, {user.email}</p>
            <Link href="/week10/shopping-list" className="text-4xl text-blue-600">Access shopping list</Link>
            <br/>
            <button onClick={handleSignOut}>Sign Out</button>
            </div>
        ) : (
            <button onClick={handleSignIn}>Sign In</button>
        )} 

    </main>;
}