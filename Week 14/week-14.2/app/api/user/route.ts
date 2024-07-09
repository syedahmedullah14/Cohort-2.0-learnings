import { NextRequest } from "next/server"

// export function GET(){
//     //database logic
//     return Response.json({
//         email: "jaser@gmail.com",
//         name: "Jaser"
//     })
// }

export async function POST(req: NextRequest){
    //database logic
    //extract body
    const body = await req.json();
    console.log(body);
    
}


// how would been written in express.js
// app.get('/api/user', (res, req) => {
//     res.json({
//         username: "jaser@gmail.com",
//         name: "jaser"
//     })
// })