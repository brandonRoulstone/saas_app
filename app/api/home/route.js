import { NextResponse } from "next/server";
import { AssemblyAI } from 'assemblyai';
import { selectUsers } from "@/libs/DbQueries";


const client = new AssemblyAI({
    apiKey: "b78acb2f18b2495680e6fa944c51ca8b"
  });
  
  const audioUrl = 'https://storage.googleapis.com/aai-web-samples/5_common_sports_injuries.mp3'
  
  const config = {
    audio_url: audioUrl
  }
  
  const run = async () => {
    const transcript = await client.transcripts.transcribe(config)
    console.log(transcript.text)
  }
  

export async function GET () {
  // await run();
  const users = await selectUsers();
  console.log(users);
  return NextResponse.json("Kudos it is running!");
}