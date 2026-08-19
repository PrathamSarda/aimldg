import React, { useEffect, useState } from 'react'

function App() {
  let [f, setf]=useState("🍎");
  console.log("data", f);
  const fhandler=()=>{
    if (f =="🍏"){
      setf("🍎");
    }
    else if (f =="🍎"){
      setf("🍏");
    }
  };
  //useEffect(fhandler,[f]);
  return (
    <div>
      <h2>Fruit</h2>
      <h1>{f}</h1>
      <button onClick={fhandler}>click</button>
    </div>
  )
}

export default App
