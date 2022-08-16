import { useState } from 'react'
import { IoIosAdd } from 'react-icons/io'
import { RiSubtractLine } from 'react-icons/ri'
import './counter.scss';
export function Counter(){
    const [count, setCount] = useState(1)
  function handleAdd(){
    if(count + 1 < 999){
      setCount(count + 1)
    }
  }
  function handleSubtract(){
    if(count -1 > 0){
      setCount(count - 1)
    }
  }
    return(
        <>
        <div className="containerCount">
           <div className="subtract">
                  <button onClick={handleSubtract}>
                    <RiSubtractLine className="outItem" />
                  </button>
                </div>
                <input
                  className="count"
                  type="number"
                  value={count}
                  onChange={(e: any) => setCount(e.target.value)}
                />
                <div className="add">
                  <button onClick={handleAdd}>
                    <IoIosAdd className="addItem" />
                  </button>
                </div>
        </div>
        </>
    )
}