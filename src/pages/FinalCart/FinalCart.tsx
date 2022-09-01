import { useCartContext } from '../../context/CartContext'
import { FormatPrice } from '../../Utils/FormatPrice'
import {useNavigate } from 'react-router-dom'
import { MyCart } from '../../components/Modal/MyCart'
import { toast } from 'react-toastify'

import api from '../../Services/axios'

import './finalCart.scss'

export function FinalCart() {
  const { cart } = useCartContext();
  const navigate = useNavigate();
  console.log(cart, 'essa praga')

  const handleSubmitProduct = async () => {
    const data = cart.products.map(item => {return {id_book:item.product_code, price:item.price}})
    const saveProduct = api.post(`http://localhost:3003/createsale`, {
      total_sale: cart.total, products:data
    })
    const response = saveProduct;
    console.log(response);
   if((await response).status < 400){
    toast.success('Compra Finalizada')
   }
   if((await response).status >= 400){
    toast.error('Não foi Possivel finalizar a compra!')
    return
   }
   setTimeout(() => {
    navigate('/')
  }, 4000)
   
   
  }
  return (
    <>
      <div className="containerFinal">
        <div className="title">
          <h1>Meu Carrinho</h1>
          <div className="total">
            <h1>
              Subtotal: <span>{FormatPrice(cart.total)}</span>
            </h1>
          </div>
        </div>
        <div className="allCarts">
          {!cart.products.length ? (
            <div
              style={{
                display: 'flex',
                width: '100%',
                justifyContent: 'center',
              }}
            >
              <p>Carrinho Vazio...</p>
            </div>
          ) : (
            cart.products.map((item) => (
              <MyCart
                key={item.product_code}
                quantity={item.quantity}
                product_code={item.product_code}
                price={item.price}
                cover_image={item.cover_image}
                number_of_pages={item.number_of_page}
                book_number={item.number_of_page}
                name={item.name}
                name_translated={item.name_translated}
              />
            ))
          )}
        </div>
        <div className="buttons">
          <button type={'submit'} onClick={handleSubmitProduct} className="buttonBuy">
            Finalizar Pedido
          </button>
        </div>
      </div>
    </>
  )
}
