import './card.scss'

import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded'
import StarRoundedIcon from '@mui/icons-material/StarRounded'
import { Book } from '../../Types/type'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import api from '../../Services/axios'

export function Card(props: Book) {
  const navigate = useNavigate();
  const [book, setBook] = useState<Book>();
  
  useEffect(() => {
    api.get(`/book/${props.product_code}`)
       .then((response) => {
         console.log(response);
         setBook(response.data)
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro : " + err)})
      },[])

  async function HandleNext(e: any) {
    e.preventDefault()
    navigate(`/book/${props.product_code}`)
  }
  return (
    <>
      <div className="cardBuy">
        <div className="cardProduct">
          <div className="imageProduct">
            <img
              className="image"
              src={book?.cover_image}
              alt={`livro: ${book?.original_name}`}
            />
          </div>
          <div className="titleProduct">
            <h2>{book?.original_name}</h2>
          </div>
          <div className="price">
            <h1>{book?.price}</h1>
          </div>
          <div className="buttons">
            <div className="addToCart">
              <button onClick={HandleNext}>
                <ShoppingCartRoundedIcon className="iconCartBuy" />
              </button>
            </div>

            <div className="buy">
              <button>Comprar</button>
            </div>

            <div className="favorite">
              <button>
                <StarRoundedIcon className="iconFavoriteBuy" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
