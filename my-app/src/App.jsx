import { useState } from "react";
import { Count as CountClass } from "./class-components/Count";
import { Form as FormClass} from "./class-components/Form";
import { Child } from "./components/Child";
import { Count } from "./components/Count";
import { Form } from "./components/Form/Form";
import './index.css';

export const App = () => {
  const [name, setName] = useState('geek')
  const [count, setCount] = useState(0)
  const arr = ['ivanov', 'petrov', 'sidorov']

const handelChangeName = (ev) =>{
  setName(ev.target.value)
}

  return (
    <div className="Form" >
      <h2 style={{backgroundColor: 'green'}}>Class components</h2>
      <Count count ={10} />
      <hr/>
      <FormClass />
      <hr/>
      <h2>Func components</h2>
      <Count />
      <hr/>
      <h3>Parent component</h3>
      <p>{count}</p>
      <input onChange={handelChangeName}/>
      <h3>Child component</h3>
      <Child name ={name} handleChangeCount={setCount}/>
      {arr.map((item, idx) => <div key={idx}>{item}</div>)}
      <hr/>
      <Form />
    </div>
  );
}


