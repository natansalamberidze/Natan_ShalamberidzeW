// import { NextResponse, NextRequest } from 'next/server';

// // Мок локальной базы данных треков (хранятся в public/audio/)
// const LOCAL_TRACKS = [
//   { artist_name: 'Boris', name: 'Entertainment', audio: '/audio/BorisBrejcha.mp3' },
//   { artist_name: 'Boris', name: 'Live Performance', audio: '/audio/Live.mp3' },
// ];

// export async function GET(request: NextRequest) {
//   const { searchParams } = new URL(request.url);
//   const source = searchParams.get('source') || 'remote';

//   if (source === 'local') {
//     return NextResponse.json({ results: LOCAL_TRACKS });
//   }

//   const clientID = process.env.JAMENDO_CLIENT_ID;
//   if (!clientID) {
//     return NextResponse.json({ error: 'API key missing' }, { status: 500 });
//   }

//   const url = `https://jamendo.com{clientID}&format=json&limit=50&include=musicinfo&audioformat=mp32&tags=Classical+Jazz`;

//   try {
//     const res = await fetch(url, { next: { revalidate: 60 } });
//     if (!res.ok) throw new Error('Jamendo error');
//     const data = await res.json();
//     return NextResponse.json(data);
//   } catch {
//     // Если удаленный API упал, мягко отдаем локальный фолбек
//     return NextResponse.json({ results: LOCAL_TRACKS });
//   }
// }