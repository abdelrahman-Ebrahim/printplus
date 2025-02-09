import NextAuth, { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";

const githubClientId = process.env.GITHUB_CLIENT_ID;
const githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
const nextAuthSecret = process.env.NEXTAUTH_SECRET;

if (!githubClientId || !githubClientSecret) {
  throw new Error("Missing GitHub OAuth environment variables");
}

const authOptions: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: githubClientId,
      clientSecret: githubClientSecret,
    }),
  ],
  secret: nextAuthSecret,

  session: {
    strategy: "jwt",
  },

  callbacks: {
    async signIn({ user, account, profile }) {
      return true;
    },
    async redirect({ url, baseUrl }) {
      return url.startsWith(baseUrl) ? url : baseUrl;
    },
    async session({ session, token }) {
      if (token.user) {
        session.user = token.user as typeof session.user; // ✅ Explicitly type user
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.user = {
          name: user.name,
          email: user.email,
          image: user.image,
        }; // ✅ Define the expected user shape
      }
      return token;
    },
  },

  debug: process.env.NODE_ENV === "development",
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
