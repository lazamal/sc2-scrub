import Navbar from "../components/Navbar";
import Showcase from "../components/Showcase";
import { SHOWCASE_DATA } from "../data/showcase_data";

export default function Homepage() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-1 p-6">
        <h1 className="text-4xl font-bold text-center mb-4">
          Star Craft 2 Scrub!
        </h1>
        <h2 className="text-3xl text-center mb-8">Have fun and improve</h2>

        <div className="flex flex-row justify-between gap-40 mb-20">
          <Showcase data={SHOWCASE_DATA.Track}></Showcase>
          <Showcase data={SHOWCASE_DATA.Cast}></Showcase>
        </div>
        <div className="flex flex-row justify-between gap-40">
          <Showcase data={SHOWCASE_DATA.Best}></Showcase>
          <Showcase data={SHOWCASE_DATA.Cheese}></Showcase>
        </div>
      </div>
    </div>
  );
}
