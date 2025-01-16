import pg from 'pg'

export async function query({ query, values = [] }) {

    const { Pool, Client } = pg
    const connectionString = 'postgresql://lendnext_db:Merc$0878@lendnext-database.cds0k8iyq3dv.ap-south-1.rds.amazonaws.com:5432/lendnextdb';
    const client = new Client({
        connectionString,
      })
 
    try {
        await client.connect();
        const results = await client.query(query, values);
        console.log('---'+results)
        return results.rows ;
      } catch (error) {
        throw Error(error.message);
        return { error };
      }
}