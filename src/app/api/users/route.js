export async function GET(req,res,next){
    let users = [
        {
            id:1,
            name:"praveen",
            email :"praveen@trickuweb.com"
        },
        {
            id:2,
            name:"nitin",
            email :"nitin@trickuweb.com"
        }
    ]
    let data = JSON.stringify(users);
    return new Response(data, {status:200});
}