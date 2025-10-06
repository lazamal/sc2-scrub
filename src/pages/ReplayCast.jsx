import Navbar from "../components/Navbar";
import ReplayTab from "../components/ReplayTab";

export default function ReplayCast() {
  return (
    <div className="h-screen">
      <Navbar />
      <h1 className="mt-10 mb-10">ReplayCast</h1>
      <ReplayTab />
    </div>
  );
}
