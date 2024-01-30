import Image from "next/image";
import { Inter } from "next/font/google";
import { useFetchInformation } from "@/hooks/useFetchInformatino";
import { useEffect, useState } from "react";
import { Footer } from "@/components/Footer";
import { MidLayer } from "@/components/MidLayer";
import { Header } from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  return (<div>
  <Header/>
  <MidLayer/>
  <Footer/>
    </div>


   




  );
}
