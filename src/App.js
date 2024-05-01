import { useEffect, useRef } from 'react';
import './App.css';
import NavBar from "./NavBar";
import Work from "./Work";
import Contact from "./Contact";
import Experience from "./Experience";

function App() {
  useEffect(()=>{
    const observer=new IntersectionObserver((entries)=>{
      entries.forEach((entry)=>{
          if(entry.isIntersecting)
          {
              entry.target.classList.add("show");
          }
          else{
              entry.target.classList.remove("show");
          }
      })
  })
  const hiddenElements=document.querySelectorAll(".hidden");

  hiddenElements.forEach((element)=>observer.observe(element));
}, [])
  return (
    <div className="App">
      <NavBar/>
      <Work/>
      <Experience/>
      <Contact/>
    </div>
  );
}

export default App;
