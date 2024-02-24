import {useState} from 'react'
function Counter(){
    const[x,setX]= useState(0);
    const[y,setY]= useState(2);
     return(
      <>
      Count:{x}
      <button onClick={()=>setX(x+1)}>Increment</button>
      <button onClick={()=>setX(x-1)}>Decrement</button>
      <br/>
      Count:{y}
      <button onClick={()=>setY(2*y+1)}>Increment</button>
      <button onClick={()=>setY(y-1)}>Decrement</button>

      </>
     );

}
export default Counter;