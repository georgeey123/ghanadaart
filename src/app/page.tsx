import React from "react";
import Link from "next/link";

const Logo = () => (
  <span style={{ fontWeight: 700, fontSize: 32, letterSpacing: 0 }}>
    <span style={{ color: '#ff0000' }}>Gh</span>
    <span style={{ color: '#ffdc00' }}>anada</span>
    <span style={{ color: '#008000' }}>Art</span> <br />
    <span style={{ color: '#000000' }}>Expo</span>

  </span>
);

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fafafa]">
      <nav className="flex justify-between items-center px-6 lg:px-16 h-20 border-b border-zinc-200 bg-white">
        <div className="flex items-center gap-3">
          <Logo />
        </div>
        <ul className="flex items-center gap-8 text-base font-medium">
  <li className="hover:text-black/70 cursor-pointer"><Link href="/exhibitions">Exhibitions</Link></li>
  <li className="hover:text-black/70 cursor-pointer"><Link href="/about">About</Link></li>
  <li className="hover:text-black/70 cursor-pointer"><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
      <header className="relative flex flex-col md:flex-row bg-black h-[320px] md:h-[400px] overflow-hidden">
        <div className="flex flex-col justify-center p-8 md:p-14 h-full w-full md:w-1/2 z-20">
          <h1 className="text-white text-3xl md:text-5xl font-bold leading-tight">
            GhanadaArt Expo
          </h1>
        </div>
        <div
          className="absolute inset-0 md:relative md:w-1/2 flex items-center justify-center"
          style={{ background: "#9ba4d1" }}
        >
          <div className="flex flex-col items-center justify-center h-full w-full backdrop-blur-sm">
            <div className="text-white font-black text-lg md:text-2xl mb-2 text-center drop-shadow-xl">Final Week!</div>
            <div className="text-white font-medium text-base md:text-xl mb-4 text-center drop-shadow-xl">
              Deadline: 28 April 2025
            </div>
            <button className="mt-1 px-6 py-3 bg-white hover:bg-zinc-100 rounded-full font-bold text-base shadow-md transition">ENTER NOW</button>
          </div>
        </div>
      </header>
      <div className="w-full bg-zinc-100 px-4 py-3 shadow text-xs text-zinc-700 flex justify-between items-center">
        <span className="flex gap-2">
          <a href="#" className="text-zinc-500 underline">Cookie settings</a>
          <button className="px-3 py-1 bg-zinc-300 rounded hover:bg-zinc-400">Deny all</button>
          <button className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">Allow all cookies</button>
        </span>
      </div>
      {/* Main Info Panels */}
      <section className="py-12 px-4 md:px-24 grid grid-cols-1 md:grid-cols-2 gap-8 bg-gradient-to-r from-[#cc43eb]/30 via-[#51bef9]/15 to-[#fafafa]">
        <div className="bg-white/90 rounded-xl shadow-md p-8">
          <h2 className="font-black text-xl mb-3">You make GhanadaArt what it is!</h2>
          <p className="mb-2">
            <b>Artists</b> are an integral part of GhanadaArt. Whether you are born and raised here, or now call this your home, your unique perspective and creative input are what make this place one of the most exciting arts hubs in THE WORLD. But hey, we’re not biased!
          </p>
          <p>
            As a gallery, we have developed the Made in GhanadaArt Art Award to champion our local community. There are simply looking for ghanadaart-based creatives to be a part of our annual showcase exhibition.
            <br/>
            Some of the qualities we value are storytelling, visual concept, creative idea, composition, abstraction and artistic sensibilities.
          </p>
        </div>
        <div className="bg-white/90 rounded-xl shadow-md p-8">
          <h2 className="font-black text-xl mb-3">What you need to know</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Anyone 18+ can apply - all gender identities and nationalities welcome, as long as you are based in ghanadaart</li>
            <li>One artwork per entry. Multiple entries are welcome</li>
            <li>Any skill level, theme, medium or subject</li>
            <li>Works should be under 100 x 100cm, or wall-based for shortlisted artists</li>
            <li>Shortlisted artists will be selected to exhibit at the major ghanadaart Prizes 10-year anniversary exhibition</li>
            <li>1 winner selected by the jury will receive a cash prize of 300€ and be part of a group exhibition at ghanadaart Gallery</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
