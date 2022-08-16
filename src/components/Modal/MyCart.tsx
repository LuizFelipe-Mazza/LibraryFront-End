import { TbTrashX } from 'react-icons/tb'

import './myCart.scss'
import { useEffect, useState } from 'react'
import api from '../../Services/axios'
import { Book } from '../../Types/type'
import { Counter } from '../Counter/Counter'


export function MyCart(props: Book) {
  
  const [book, setBook] = useState<Book>()

  useEffect(() => {
    api
      .get(`/book/${props.product_code}`)
      .then((response) => {
        console.log(response)
        setBook(response.data)
      })
      .catch((err) => {
        console.error('ops! ocorreu um erro : ' + err)
      })
  }, [])

  return (
    <>
      <div className="myShopping">
        <div className="container">
          <div className="image">
            <img src={book?.cover_image} alt="" />
          </div>
          <div className="descriptionShop">
            <h2>{book?.original_name}</h2>
            <p>Preço:R$ {book?.price}</p>
            <p>
              Quantidade de Páginas: <strong>{book?.number_of_pages}</strong>
            </p>
            <p>
              Editora: <strong>{book?.name}</strong>
            </p>
            <p>
              Código do Produto: <strong>{book?.book_number}</strong>
            </p>
            <div className="options">
              <div className="delete">
                <button>
                  <TbTrashX className="trash" />
                </button>
              </div>
              <div className="containerOptions">
              <Counter/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
