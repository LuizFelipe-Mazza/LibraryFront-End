import { FormatPrice } from '../../Utils/FormatPrice'
import { TbTrashX } from 'react-icons/tb'
import { Counter } from '../Counter/Counter'

import './myCart.scss'
import { useCartContext } from '../../context/CartContext';

interface Props {
  quantity: number;
  product_code: number;
  price: number;
  name: string;
  cover_image: string;
  number_of_pages: number;
  book_number: number;
  name_translated: string;
}
export function MyCart(props: Props) {
  const {removeProduct} = useCartContext();

  const remove = () => {
    removeProduct(props.product_code)
  }

  return (
    <>
      <div className="myShopping">
        {props && (
          <div className="container">
            <div className="image">
              <img src={props.cover_image} alt="" />
            </div>
            <div className="descriptionShop">
              <h2>{props.name_translated}</h2>
              <p>Preço:{FormatPrice(props?.price as number)}</p>
              <p>
                Quantidade de Páginas: <strong>{props.number_of_pages}</strong>
              </p>
              <p>
                Editora: <strong>{props?.name}</strong>
              </p>
              <p>
                Código do Produto: <strong>{props.book_number}</strong>
              </p>
              <div className="options">
                <div className="delete">
                  <button onClick={remove}>
                    <TbTrashX className="trash" />
                  </button>
                </div>
                <div className="containerOptions">
                  <Counter product_code={props.product_code} />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
