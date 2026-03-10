import ComingSoon from "@/components/home/ComingSoon";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "YoungMenu | Coming Soon",
  description: "We are crafting a new digital experience for the modern diner.",
};

const Home = () => {
  return <ComingSoon />;
};

export default Home;
