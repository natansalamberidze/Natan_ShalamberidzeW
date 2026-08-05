// import { NextResponse } from 'next/server';

// export async function GET() {
//   const clientID = process.env.NEXT_PUBLIC_JAMENDO_CLIENT_ID;

//   if (!clientID) {
//     return NextResponse.json({ error: 'Jamendo client ID is missing' }, { status: 500 });
//   }

//   const url = `https://api.jamendo.com/v3.0/tracks/?client_id=${clientID}&format=json&limit=50&include=musicinfo&audioformat=mp32&tags=Classical+Jazz`;

//   try {
//     const res = await fetch(url);
//     const data = await res.json();
//     return NextResponse.json(data);
//   } catch (error) {
//     return NextResponse.json({ error: 'Failed to fetch tracks' }, { status: 500 });
//   }
// }