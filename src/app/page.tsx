import React from "react";

const Logo = () => (
  <span style={{ fontWeight: 700, fontSize: 32, letterSpacing: 0 }}>
    <span style={{ color: '#ff0000' }}>gh</span>
    <span style={{ color: '#ffdc00' }}>anada</span>
    <span style={{ color: '#008000' }}>art</span>
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
          <li className="hover:text-black/70 cursor-pointer">Prizes</li>
          <li className="hover:text-black/70 cursor-pointer">Exhibitions</li>
          <li className="hover:text-black/70 cursor-pointer">Consultation</li>
          <li className="hover:text-black/70 cursor-pointer">About</li>
          <li className="hover:text-black/70 cursor-pointer">Contact</li>
        </ul>
      </nav>
      <header className="relative flex flex-col md:flex-row bg-black h-[320px] md:h-[400px] overflow-hidden">
        <div className="flex flex-col justify-center p-8 md:p-14 h-full w-full md:w-1/2 z-20">
          <h1 className="text-white text-3xl md:text-5xl font-bold leading-tight">
            ghanadaart<br />MADE IN
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
        <span>
          About cookies on this site &ndash; We use cookies to collect and analyse information on site performance and usage, to provide social media features and to enhance and customise content and advertisements.
        </span>
        <span className="flex gap-2">
          <a href="#" className="text-zinc-500 underline">Cookie settings</a>
          <button className="px-3 py-1 bg-zinc-300 rounded hover:bg-zinc-400">Deny all</button>
          <button className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">Allow all cookies</button>
        </span>
      </div>
      {/* Main Info Panels */}
      <section className="py-12 px-4 md:px-24 grid grid-cols-1 md:grid-cols-2 gap-8 bg-gradient-to-r from-[#cc43eb]/30 via-[#51bef9]/15 to-[#fafafa]">
        <div className="bg-white/90 rounded-xl shadow-md p-8">
          <h2 className="font-black text-xl mb-3">You make ghanadaart what it is!</h2>
          <p className="mb-2">
            <b>Artists</b> are an integral part of ghanadaart. Whether you are born and raised here, or now call this your home, your unique perspective and creative input are what make this place one of the most exciting arts hubs in THE WORLD. But hey, we’re not biased!
          </p>
          <p>
            As a gallery, we have developed the Made in ghanadaart Art Award to champion our local community. There are simply looking for ghanadaart-based creatives to be a part of our annual showcase exhibition.
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
      {/* Award Details */}
      <section className="py-14 px-4 md:px-24 grid md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col items-center md:items-start">
          <img src="https://ext.same-assets.com/1094691372/3452771007.svg" alt="ghanadaart award" className="w-56 mb-6 rounded" />
          <div className="font-black text-lg mb-2">Made in ghanadaart Art Award<br/>FINAL WEEK!</div>
          <div className="text-base font-semibold mb-2">Cash prize 300€<br/>Group exhibition at ghanadaart Gallery<br/>Artsy profile</div>
        </div>
        <div className="flex flex-col">
          <div className="bg-white p-6 rounded-xl shadow">
            <div className="font-semibold mb-2">Made in ghanadaart Art Award 2025</div>
            <div className="text-sm mb-2">18.00€</div>
            <ul className="list-disc pl-5 mb-4 text-sm">
              <li>Name, country, contact information</li>
              <li>Artwork title, medium, size, weight, year of creation</li>
              <li>1 image jpg or png (up to 3 MB per file)</li>
            </ul>
            <div className="text-xs mb-3">
              You can upload anytime before the <b>28th April 2025, midnight</b>. You will receive an application link via Email.<br/>
              Fee is for administration purposes, no additional fees will be charged to exhibit.
            </div>
            <button className="mt-2 px-6 py-3 bg-black text-white rounded-full font-bold shadow hover:bg-zinc-900">ENTER NOW</button>
          </div>
        </div>
      </section>
      {/* Anniversary Section */}
      <section className="py-12 md:py-20 px-4 md:px-24">
        <div className="font-black text-2xl mb-6">Be part of the ghanadaart Prizes 10-Year Anniversary Exhibition!</div>
        <img className="w-full max-w-2xl aspect-video object-cover rounded-xl shadow mx-auto" src="https://ugc.same-assets.com/_06lE4Dn2VEUh-9t-ioN9EPWapGl71E0.jpeg" alt="Exhibition venue" />
      </section>
    </main>
  );
}
