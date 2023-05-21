import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from 'next/router';

export default function Login() {
  const { data: session } = useSession();
  const router = useRouter();

  if (session) {
    const handleSignOut = () => {
      signOut();
    };

    return (
      <div>
        <p>Should just display back to the main page</p>
        <button onClick={handleSignOut}>Sign Out</button>
      </div>
    );
  }

  const handleSignIn = async () => {
    await signIn();
    router.push('/');
  };

  if (!session) {
    handleSignIn();
  }

  return null;
}
