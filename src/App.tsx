import { Suspense, useState } from "react";
import type { ITechType } from "./type";
import Nav from "./Components/Nav";
import Banner from "./Components/Banner";
import Technologies from "./Components/Technology/Technologies";

const TechnologyFetch = async (): Promise<ITechType[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
}



function App() {

  const [techPromise] = useState(TechnologyFetch)


  return (
    <>
      <Nav></Nav>
      <Banner></Banner>

      <Suspense fallback={<h2>"Loading..."</h2>}>
         <Technologies techPromise={techPromise}></Technologies>
      </Suspense>
    </>
  )
}

export default App
