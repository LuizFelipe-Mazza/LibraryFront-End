import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded'
import StarRoundedIcon from '@mui/icons-material/StarRounded'
import api from '../../Services/axios'

import { useCartContext } from '../../context/CartContext'
import { useEffect, useState } from 'react'
import { FormatPrice } from '../../Utils/FormatPrice'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Book } from '../../Types/type'

import 'react-toastify/dist/ReactToastify.css'
import './card.scss'

export function Card(props: Book) {
  const { addQuantity } = useCartContext()
  const [book, setBook] = useState<Book>()
  const [add, setAdd] = useState(0)

  const navigate = useNavigate()

  useEffect(() => {
    api
      .get(`/book/${props.product_code}`)
      .then((response) => {
        setBook(response.data)
      })
      .catch((err) => {
        console.error(`ops! ocorreu um erro:${err}`)
      })
  }, [])

  const goToDetails = (e: any) => {
    e.preventDefault()
    navigate(`/book/${props.product_code}`)
  }

  const addMoreProduct = async () => {
    if (add === 0) {
      setAdd(add + 1)
    }
    if (add <= 999) {
      setAdd(add + 1)
    }
    addQuantity(props)
    await toast('🛒Produto adicionado ao Carrinho!')
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
            <h1>{FormatPrice(book?.price as number)}</h1>
          </div>
          <div className="buttons">
            <div className="addToCart">
              <button className="qtd" onClick={addMoreProduct}>
                <ShoppingCartRoundedIcon className="iconCartBuy" />
                <input
                  type={'text'}
                  value={add}
                  onChange={(e: any) => setAdd(e.target.value)}
                  disabled
                />
              </button>
            </div>

            <div className="buy">
              <button onClick={goToDetails}>Detalhes</button>
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
