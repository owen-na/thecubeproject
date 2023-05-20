import { useSession, signIn, signOut } from "next-auth/react";

// does not fully work yet since github keys are not in the env LOL

export default function Login() {
    const {data: session} = useSession()

    if (session) { // this is if the user is logged in to show this
        return (
            <div>
                <p>should just display back to main page</p>
                <button onClick={() => signOut()}>test</button>
            </div>
        )
    }

    return ( // else redirect them to a signed in page to get them started
        // <div>
        //     <p>not funny</p>
        //     <button onClick={() => signIn()}>test</button>
        // </div>
        signIn() // does this work?
    )
}