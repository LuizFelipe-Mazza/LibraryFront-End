import './card.scss'
import Capa from '../../assets/pqnp.webp'

import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import StarRoundedIcon from '@mui/icons-material/StarRounded';

export function Card() {
  return (
    <>
      <div className="cardBuy">
        <div className="cardProduct">
          <div className="imageProduct">
            <img className="image" src={Capa} alt="" />
          </div>
          <div className="titleProduct">
            <h2>O Pequeno Principe</h2>
          </div>
          <div className="price">
            <h1>129,99 R$</h1>
          </div>
          <div className="buttons">
            <div className="addToCart">
                <button><ShoppingCartRoundedIcon className='iconCartBuy'/></button>
            </div>

            <div className="buy">
                <button>Comprar</button>
            </div>

            <div className="favorite">
                <button><StarRoundedIcon className='iconFavoriteBuy'/></button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
