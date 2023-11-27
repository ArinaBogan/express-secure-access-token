const pool=require('../db');

async function createUserDB(name, surname, email, pwd){
    const client=await pool.connect();
    const sql=`insert into users(name, surname, email, pwd)
    values ($1,$2,$3,$4) returning*`
    const data=(await client.query(sql,[name, surname, email, pwd])).rows;
    return data;
}

async function getUserByEmail(email){
    const client=await pool.connect();
    const sql=`select * from users where email=$1`
    const data=(await client.query(sql,[email])).rows
    return data
}

module.exports={createUserDB,getUserByEmail}