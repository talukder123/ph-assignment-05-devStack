import { useState } from "react";
import type { ITechType } from "./type";
import Nav from "./Components/Nav";

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
    </>
  )
}

export default App
