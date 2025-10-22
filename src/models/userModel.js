import pool from '../config/db.js';

const findEmail = (email) =>{
    return pool.query('SELECT username, email, password, role, avatar_url from users where email = $2', [email]);
};

const insertUser = (data) => {
    const { id, username, email, passwordHash, role, avatar_url } = data
    return new Promise((resolve, reject) =>
        pool.query(`INSERT INTO users(id,username,email,password,role,avatar_url) VALUES('${id}','${username}','${email}','${passwordHash}','${role}','${avatar_url}')`, (error, result) => {
            if (!error) {
                resolve(result);
            } else {
                reject(error);
            }
        }));
};

export { findEmail, insertUser };