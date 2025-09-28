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
        <div className="flex flex-col gap-20">
          {SHOWCASE_DATA.map((item) => (
            <Showcase key={item.key} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
