export function GET(){
    //database logic
    return Response.json({
        email: "jaser@gmail.com",
        name: "Jaser"
    })
}

export function POST(){
    //database logic
    return Response.json({
        email: "jaser@gmail.com",
        name: "Jaser"
    })
}

export function PUT(){
    //database logic
    return Response.json({
        email: "jaser@gmail.com",
        name: "Jaser"
    })
}

// how would been written in express.js
// app.get('/api/user', (res, req) => {
//     res.json({
//         username: "jaser@gmail.com",
//         name: "jaser"
//     })
// })