import Image from "next/image";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import { ClerkProvider } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      
      <Header />
      <Hero />
    </div>
  );
}
