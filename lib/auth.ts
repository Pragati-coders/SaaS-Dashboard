import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { authSchema } from "@/lib/validations";
import { currentTenant, currentUser } from "@/lib/demo-data";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt"
  },
  pages: {
    signIn: "/login"
  },
  providers: [
    CredentialsProvider({
      name: "Email and password",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        const parsed = authSchema.safeParse(credentials);
        if (!parsed.success) {
          return null;
        }

        const demoHash = await bcrypt.hash("password123", 10);
        const validDemoLogin = parsed.data.email === "pragati@example.com" && (await bcrypt.compare(parsed.data.password, demoHash));

        if (!validDemoLogin) {
          return null;
        }

        return {
          id: currentUser.id,
          name: currentUser.name,
          email: currentUser.email,
          tenantId: currentTenant.id,
          role: currentUser.role
        };
      }
    })
  ],
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.tenantId = "org_nexora";
        token.role = "owner";
      }
      return token;
    },
    session({ session, token }) {
      if (session.user) {
        session.user.tenantId = token.tenantId as string;
        session.user.role = token.role as string;
      }
      return session;
    }
  }
};
