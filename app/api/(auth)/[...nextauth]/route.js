import NextAuth from 'next-auth/next';
import Credentials from 'next-auth/providers/credentials';
import { compare } from 'bcrypt';
// import { pool } from '@/config/db';
import { userLogin } from '@/libs/DbQueries';
import { NextResponse } from 'next/server';
import { pool } from '@/config/db';
// import { TypeORMLegacyAdapter } from '@next-auth/typeorm-legacy-adapter';


export const authOptions = {
    providers : [
        Credentials({
            id: 'credientals',
            name: 'credientals',
            credentials : {
                label: 'Email',
                type:  'text'
            },
            password: {
                label: 'Password',
                type: 'text'
            },
            async authorize(credientals, req, res){
                try {
                    const { user_email, user_role } = req.json();
                    const user = await userLogin(user_email, user_role)
                    console.log(user)
    
                    if(user){
                        const kudos = await compare(credientals.user_password, user)
                        if(kudos) {
                            return user;
                        }
                    }
                } catch (error) {
                    throw new error(error);
                }
            }
        })
    ],
    // adapter: TypeORMLegacyAdapter(pool),
    callbacks : {
        async SignIn({ user, account }){
            if(account?.provider == 'credientals'){
                return true;
            }
        }
    }
}

export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };