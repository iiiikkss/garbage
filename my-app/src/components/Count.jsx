import { useState } from "react";


export const Count =()=>{
    const [count, setCount] = useState(1);

    const hendleClick = () =>{
        setCount(count + 1)
    }
    return<>
        <p>Count state: {count}</p>
        <button type="button" onClick={hendleClick}> click</button>
    </>
}