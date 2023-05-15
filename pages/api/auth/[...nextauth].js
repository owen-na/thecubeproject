import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers";

const authOptions = {
  providers: [
    GitHubProvider ({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // ...add more providers here
  ],
};

export default NextAuth(authOptions);


// no idea if this can even be a js file in a ts project LOL