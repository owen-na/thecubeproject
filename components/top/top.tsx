import styles from '@styles/top.module.css'
import Image from 'next/image'
import MyGif from '../../assets/215984.gif'
import Link from 'next/link';
import { useSession } from 'next-auth/react';

// This function will return the users name on load if there are logged in with cookies
// With a welcome back, ________
// login and sighnup will be based on github creds. 
// Next.authjs prob
// function Authenticated() {
//     const { data: session, status } = useSession();

    
//   if (status === 'loading') {
//     return <p>Loading screen here/splash page</p>;
//   }
//     if (!session) {
//         return (
//             <>
//             <p>not authd, not sure what to do here</p>
//             </>
//         )
//     }

//     return (
//         <>
//       <p>Welcome back, {session.user!.name}!</p>
//     </>
//   );
// }

const imageStyle = {
    borderRadius: '25%',
};

export default function top() {
    const { data: session, status } = useSession!();

    return (
        <div className={styles.header}>
            <Image
            src={MyGif}
            className={styles.mainImage}
            style={imageStyle}
            alt='ascii-gif'
            />
            <div className={styles.title}>
                <h1>The Cube Project: Programming LFG</h1>
                <button>Access User Base</button>
            </div>
            <div className={styles.loginstatus}>
            {status === 'loading'}
        {session ? (
        <>
          <p>Welcome back, {session.user!.name}!</p>
          <button className={styles.loginhButton}>Sign Out</button>
        </>
        ) : (
            <>
                <Link href="/login">
                    <button className={styles.loginButton}>Login</button>
                </Link>
                </>
        )}
            </div>
        </div>
    )
}