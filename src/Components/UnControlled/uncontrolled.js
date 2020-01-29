import React from "react";
import Lottie from "react-lottie";
import animationData from "../../jsonData.json"

export default function UnControlled() {
   
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid meet"
        }
    };
   
    return (
        <div >
          
            <Lottie options={defaultOptions} height={200} width={200} />
        </div>
    );
      

       
}



