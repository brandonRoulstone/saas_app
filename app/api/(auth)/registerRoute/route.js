import { addUser } from "@/libs/DbQueries";
import { hash } from "bcrypt";
import { NextResponse} from "next/server";

export async function POST(request){
    const { 
        user_name,
        user_lastname,
        user_email,
        user_password,
        user_role,
        is_banned,
        is_premium, 
        is_verified, 
        created_at 
    } = await request.json();

    const hashedPassword = await hash(user_password, 10);
    await addUser(user_name, user_lastname, user_email, hashedPassword, user_role, is_banned, is_premium, is_verified, created_at);
    return NextResponse.json({
        userMsg: 'You have officially registered an acc by us!',
        adminMsg: 'User successfully created'
    });
} 