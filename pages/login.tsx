import { useSession, signIn, signOut } from "next-auth/react";

export default function Login() {
    const {data: session} = useSession()

    if (session) { // this is if the user is logged in to show this
        return (
            <div>
                <p>should just display back to main page</p>
            </div>
        )
    }

    return ( // else redirect them to a signed in page to get them started
        <div>
            <p>not funny</p>
        </div>
    )
}