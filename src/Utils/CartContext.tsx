import { createContext, useState } from 'react'

export type sale = {
  id: number
  id_user: number
  id_address: number
  total_sale: number
  payment_type: number
}

export type itemSale = {
  id: number
  id_sale: number
  id_book: number
  price: number
}

export type Cart = {
  products: {
    product_code: number
    quantity: number
    price: number
    name: string
    imageUrl: string
  }[]
  address: {
    address: string
  }
  total: number
  payment_type: PaymentType
}

export enum PaymentType {
  CREDIT = 'CARTAO',
  PIX = 'PIX',
  BILL = 'BOLETO',
}
type CartContextProviderProps = {
  children: React.ReactNode
}
export const CartContext = createContext({})

export function CartContextProvider(props: CartContextProviderProps) {
  const [cart, setCart] = useState({})

  function addQuantity(product_code: number, cart: Cart): Cart {
    const newProduct = cart.products.map((product) => {
      if (product.product_code === product_code) {
        product.quantity =+1
      }
      return product
    })
    console.log(newProduct)
    setCart(newProduct)
    return {
      ...cart,
      products: newProduct,
    }
  }

  function subtractQuantity(product_code: number, cart: Cart): Cart {
    const newProduct = cart.products.map((product) => {
      if (product.product_code === product_code) {
        if (product.quantity > 0) {
          product.quantity  =-1
        }
      }
      return product
    })
    console.log(newProduct)
    setCart(newProduct)
    return {
      ...cart,
      products: newProduct,
    }
  }

  return (
    <CartContext.Provider value={{ addQuantity, subtractQuantity }}>
      {props.children}
    </CartContext.Provider>
  )
}
