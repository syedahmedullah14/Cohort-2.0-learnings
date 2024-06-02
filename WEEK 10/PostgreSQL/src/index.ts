import { Client } from "pg";

const client = new Client({
    connectionString: "postgresql://test_owner:yHouJt9Nv7eT@ep-purple-pine-a5fd1tnq.us-east-2.aws.neon.tech/test?sslmode=require"
})

async function createUsersTable(){
    await client.connect();
    const result = await client.query(`
    
        CREATE TABLE users (
            is SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    
    `)
    console.log(result)
}
createUsersTable()