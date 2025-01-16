import {query} from "../../../lib/db";

export async function GET(request) {
    const persons = await query({
        query: "SELECT * from persons",
        values: [],
    });

    let data = JSON.stringify(persons);
    return new Response(data, {
        status: 200,
    });
}