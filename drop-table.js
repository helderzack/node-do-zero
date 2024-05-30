import { sql } from "./db.js";

sql`
    DROP TABLE videos;
`.then(() => {
    console.log("Table deleted succesfully!")
}).catch((e) => {
    console.log(e)
})