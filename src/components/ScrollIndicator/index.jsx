
import React, { useEffect, useState } from "react";
import "./style.css";


export default function ScrollIndicator() {
    const [scrollpercentage, setScrollpercentage] = useState(0);

    useEffect(() => {   
        function handleScroll() {
            const scrollable = document.documentElement.scrollHeight - window.innerHeight;
            const scrolled = window.scrollY;
            const percentage = (scrolled / scrollable) * 100;
            setScrollpercentage(percentage);
        }
    
        window.addEventListener("scroll", handleScroll);
    
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
        }, []);

    console.log(scrollpercentage);

    return (
      <div className="scroll-indicator">
            <div
                className="scroll-indicator-progress"
                style={{ width: `${scrollpercentage}%` }}
            ></div>
      </div>
    );
  }
  
