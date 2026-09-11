import { Suspense, useState } from "react";
import type { ITechType } from "./type";
import Nav from "./Components/Nav";
import Banner from "./Components/Banner";
import Technologies from "./Components/Technology/Technologies";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Components/Footer";

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
      <ToastContainer position="bottom-right" />
      <Footer></Footer>
      </>
      
  )
}

export default App
