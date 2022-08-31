import { useCartContext } from '../../context/CartContext'
import { RiSubtractLine } from 'react-icons/ri'
import { useState } from 'react'
import { IoIosAdd } from 'react-icons/io'
import { toast } from 'react-toastify'

import './counter.scss'

export function Counter(product_code: any) {
  const { cart, addQuantity, subtractQuantity } = useCartContext()
  const [add, setAdd] = useState(1)
  const addMoreProduct = async () => {
    if (add === 0) {
      setAdd(add + 1);
    }
    if (add <= 999) {
      setAdd(add + 1);
    }

    addQuantity(product_code)
    await toast.success('Item Adicionado!', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  const takeOfProduct = () => {
    if (add > 1) {
      setAdd(add - 1);
    }
    subtractQuantity(product_code, cart);
  }

  console.log(cart)
  return (
    <>
      <div className="containerCount">
        <div className="subtract">
          <button onClick={takeOfProduct}>
            <RiSubtractLine className="outItem" />
          </button>
        </div>
        <input
          type="text"
          value={add}
          onChange={(e: any) => setAdd(e.value.target)}
        />
        <div className="add">
          <button onClick={addMoreProduct}>
            <IoIosAdd className="addItem" />
          </button>
        </div>
      </div>
    </>
  )
}
