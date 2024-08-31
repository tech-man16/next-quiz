import Navigation from "@/app/components/1_Navigation";
import QnScreen from "./components/2_Main";
import TrackScreen from "@/app/components/3_Track";


export const fetchCache = "force-no-store";
export const dynamic = 'force-static';

export default function Home() {  
    return (
      <main className="flex flex-col border-4 h-screen">
        <div className="border-2"> < Navigation /> </div>
        <div className="flex flex-1 border-2 h-2/3">
          {<div className="flex flex-1 border-2"><QnScreen /></div>}
          <div className="border-2"> <TrackScreen /> </div>
        </div>
      </main>
    )
}
