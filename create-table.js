import { sql } from './db.js'

sql`CREATE EXTENSION IF NOT EXISTS pgcrypto;`

sql`
    CREATE TABLE videos(
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        title TEXT, 
        description TEXT, 
        duration INTEGER
    );
`.then(() => {
    console.log("Table created succesfully!!")
}).catch((e) => {
    console.log(e)
})