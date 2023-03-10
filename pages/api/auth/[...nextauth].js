import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

//GOOGLE AUTH
// const googleClientId = process.env.GOOGLE_ID
// const googleClientSecret = process.env.GOOGLE_SECRET

// GoogleProvider({
//   clientId: googleClientId ,
//   clientSecret: googleClientSecret,
// }),
//GITHUB AUTH
const githubClientId = process.env.GITHUB_ID;
const githubClientSecret = process.env.GITHUB_SECRET;

export const authOptions = {
  // Configure one or more authentication providers

  providers: [
    GithubProvider({
      clientId: githubClientId,
      clientSecret: githubClientSecret,
    }),
    // ...add more providers here
  ],
};

export default NextAuth(authOptions);
