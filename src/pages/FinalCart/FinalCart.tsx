import { useCartContext } from '../../context/CartContext';
import { MyCart } from '../../components/Modal/MyCart';
import './finalCart.scss';
import { FormatPrice } from '../../Utils/FormatPrice';

export function FinalCart() {
  const { cart } = useCartContext()
  console.log(cart, 'essa praga')
  return (
    <>
      <div className="containerFinal">
        <div className="title">
          <h1>Meu Carrinho</h1>
          <div className="total">
          <h1>Subtotal: <span>{FormatPrice(cart.total)}</span></h1>
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
          <button className="buttonBuy">Finalizar Pedido</button>
        </div>
      </div>
    </>
  )
}
