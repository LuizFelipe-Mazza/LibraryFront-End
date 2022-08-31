import { createContext, PropsWithChildren, useContext, useState } from 'react'
import { toast } from 'react-toastify'
import { Book } from '../Types/type'

export type itemSale = {
  id: number
  id_sale: number
  id_book: number
  price: number
}
export type Cart = {
  products: {
    name: string
    quantity: number
    product_code: number
    price: number
    name_translated: string
    cover_image: string
    number_of_page: number
    book_number: string
  }[]
  address?: {
    address?: string
  }
  total: number
  payment_type?: PaymentType
}

export enum PaymentType {
  CREDIT = 'CARTAO',
  PIX = 'PIX',
  BILL = 'BOLETO',
}
type CartContextType = {
  cart: Cart
  addQuantity: (product: Book) => void
  subtractQuantity: (product_code: number, cart: Cart) => Cart
  removeProduct: (product_code: number) => void
}
const CartContext = createContext({} as CartContextType)
const CartContextProvider = ({ children }: PropsWithChildren) => {
  const [cart, setCart] = useState<Cart>({
    products: [],
    total: 0,
  })

  const addQuantity = (productToHandle: Book) => {
    const hasProduct = cart.products.some(
      (product) => product.product_code === productToHandle.product_code,
    )
    if (hasProduct) {
      const newProducts = cart.products?.map((product) => {
        if (product.product_code === productToHandle.product_code) {
          product.quantity += 1
        }
        return product
      })
      setCart({ ...cart, products: newProducts })
    } else {
      const newProducts = cart.products
      newProducts.push({
        quantity: 0,
        product_code: productToHandle.product_code,
        price: productToHandle.price,
        name_translated: productToHandle.name_translated,
        cover_image: productToHandle.cover_image,
        number_of_page: productToHandle.number_of_pages,
        book_number: productToHandle.book_number,
        name: productToHandle.name,
      })
      const productsToAdd = newProducts.map((product) => {
        if (product.product_code === productToHandle.product_code) {
          product.quantity += 1
        }
        return product
      })
      setCart({ ...cart, products: productsToAdd })
    }
  }

  cart.total = cart.products.reduce(
    (acc, product) => (cart.total = acc + product.price * product.quantity),
    0,
  )

  const subtractQuantity = (product_code: number, cart: Cart): Cart => {
    const newProduct = cart.products?.map((product) => {
      if (product.product_code === product_code) {
        if (product.quantity > 0) {
          product.quantity = -1
        }
      }
      return product
    })

    return {
      ...cart,
      products: newProduct,
    }
  }

  const removeProduct = (product_code: number) => {
    const updateCart = cart.products.filter(
      (cartProduct) => cartProduct.product_code !== product_code,
    )
    const productExists = cart.products.some(
      (product) => product.product_code === product_code,
    )
    if (!productExists) {
      toast.error('Erro na remoção do produto!')
      return
    }

    setCart({
      ...cart,
      products: updateCart,
    })
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        removeProduct,
        addQuantity,
        subtractQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
const useCartContext = () => useContext(CartContext)

export { useCartContext, CartContextProvider }
