import { pool } from "@/config/db.js";

// user CRUD initialization

/*===================

 SECURE CRUD SYSTEM,

 ==================*/

const selectUsers = async () => {
    const [ users ] = await pool.query(`
        SELECT * from users
    `);

    return users;
}

const selectUser = async (user_id) => {
    const [ user ] = await pool.query(`
        SELECT * FROM users WHERE user_id = ?
    `, [user_id])

    return user;
}

const addUser = async (user_name, user_lastname, user_email, user_password, user_role, is_banned, is_premium, is_verified, created_at) => {
    const [ user ] = await pool.query(`
        INSERT INTO users (user_name, user_lastname, user_email, user_password, user_role, is_banned, is_premium, is_verified, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP)
    `, [user_name, user_lastname, user_email, user_password, user_role, is_banned, is_premium, is_verified, created_at]);
    return user.insertId;
}

const deleteUser = async (user_id) => {
    const [ user ] = await pool.query(`
        DELETE FROM users WHERE user_id = ?
    `, [user_id]);
}

const updateUser = async (user_name, user_lastname, user_email, user_password, user_role, is_banned, is_premium, is_verified, created_at, user_id) => {
    const [ user ] = pool.query(`
        UPDATE users SET user_name = ?, 
        user_lastname = ?, user_email = ?, user_password = ?, 
        user_role = ?, is_banned = ?, is_premium = ?, is_verified = ?, 
        created_at = CURRENT_TIMESTAMP WHERE user_id = ? 
    `, [user_name, user_lastname, user_email, user_password, user_role, is_banned, is_premium, is_verified, created_at, user_id]);
}


/*===========================================*/
                                             //
    // USER AUTH                             //
    // IMPLEMENT A SECURE WAY FOR NEXT AUTH  //
                                             //
/*===========================================*/

const userLogin = async (user_email, user_role) => {
    const [[{ user_password }]] = await pool.query(`
        SELECT user_password FROM users WHERE user_email = ? AND user_role = ?
    `, [user_email, user_role]);

    return user_password;
}

const activeUser = async (user_email) => {
    const [ user ] = await pool.query(`
        SELECT * FROM users WHERE user_email = ?
    `, [user_email]);
    return user;
}


/*===========================================*/
                                             //
    // APP SECURITY                          //
    // IMPLEMENT SOME RESTRICTIONS           //
                                             //
/*===========================================*/
// ADMINS ONLY GETS ACCESS TO THIS


const banUser = async (user_id) => {
    const [ user ] = await pool.query(`
        SELECT * from users where user_id = ?
    `, [user_id])

    if (user[0].is_banned === 0) {
        await pool.query(`
            UPDATE users SET is_banned = 1 WHERE user_id = ?
        `, [user_id]);
    }

    if(user[0].is_banned === 1 ){
        await pool.query(`
            UPDATE users SET is_banned = 0 WHERE user_id = ?
        `, [user_id]);
    }

}



export {
    selectUsers,
    selectUser,
    addUser,
    updateUser,
    deleteUser,
    userLogin,
    activeUser,
    banUser
}




