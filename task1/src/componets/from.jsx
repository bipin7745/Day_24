import {createRoot} from "react-dom/client";
import { useState } from "react";

function From ()
{

    const [name,setName]=useState("abc");
    return(
        <>
        <form action="">
             <label>Enter your name:
            <input type="text"
            value={name}
            onChange={(e)=>setName(e.target.value)} />
      </label>
      <p>Current value: {name}</p>
        </form>
        </>
    );
}
export default From;