import { sql } from '@vercel/postgres';
 
export default async function handler(request, response) {
  try {
    const visitorCount = request.query.visitorCount;
    const Id = request.query.Id;
    if (!visitorCount || !Id) throw new Error('Visitor count and Id required');
    await sql`INSERT INTO Visitors (Count, Id) VALUES (${visitorCount}, ${Id});`;
  } catch (error) {
    return response.status(500).json({ error });
  }
 
  const visitors = await sql`SELECT * FROM Visitors;`;
  return response.status(200).json({ visitors });
}