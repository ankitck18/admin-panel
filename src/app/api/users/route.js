import {query} from "../../../lib/db";

export async function GET(request) {
    const users = await query({
        query: "SELECT * from users",
        values: [],
    });

    let data = JSON.stringify(users);
    return new Response(data, {
        status: 200,
    });
}