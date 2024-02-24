import {useState} from 'react'
const buttonStyle = {
    backgroundColor: 'blue',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer'
  };
function Conditional(){
    const[x,setX]= useState(0);
    const[y,setY]= useState(2);
    const [flag,setFlag]=useState(false);
    const [todo,setTodo]=useState(['zia','ur','rehman'])
     return(
      <>
      {/* Count:{x} is {(x%2==0)?"even":"odd"}
      <button onClick={()=>setX(x+1)}>Increment</button>
      <button onClick={()=>setX(x-1)}>Decrement</button>
      <br/> */}
      {/* {
        (flag==true)?<input/>:<p>to do list</p>
      }
      <button onClick={()=>setFlag(!flag)} style={buttonStyle}>Subbmit</button>
       */}
       <ul>
        {todo.map((td)=><li>{td}</li>)}
        <button onClick={()=>setTodo([...todo,"full stack"])}>Click</button>
        </ul>

      </>
     );

}
export default Conditional;