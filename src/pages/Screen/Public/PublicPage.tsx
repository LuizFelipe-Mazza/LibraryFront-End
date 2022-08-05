import { useNavigate } from 'react-router-dom'
import './publicPage.scss'

import Livro from '../../../assets/undraw_reading_time_re_phf7.svg'

import { Sidebar } from '../../../components/Sidebar/Sidebar';

import CreditCardRoundedIcon from '@mui/icons-material/CreditCardRounded';
import PixRoundedIcon from '@mui/icons-material/PixRounded';
import PaidRoundedIcon from '@mui/icons-material/PaidRounded';
import { Card } from '../../../components/Card/Card';


export function PublicPage() {
  const navigate = useNavigate()
  function HandleLogin(event: any) {
    event.preventDefault()
    navigate('/login')
  }
  return (
    <>
    <div className="containerAllPage">
   <Sidebar/>
      <div className="containerPublicPage">
        <nav>
          <div className="logo">
            <h1>
              Livraria <span>Digital</span>
            </h1>
          </div>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Sobre</a>
            </li>
            <li>
              <a href="/">Contato</a>
            </li>
          </ul>
          <div className="buttonToSignIn">
            <button onClick={HandleLogin}>Entrar</button>
          </div>
        </nav>
        <div className="info">
          <div className="infoBook">
            <h1>
              Variedades e Livros você encontra aqui <br />
              <span>Não Fique de Fora</span>
            </h1>

            <div className="buttons">
              <button className="btn1">Obter Meu Livro</button>
              <button className="btn2">Mais Informações</button>
            </div>
          </div>

          <div className="images">
            <img src={Livro} alt="" />
          </div>
        </div>
      </div>
      <div className="cardsPage">
        <div className="cards">
          <span><CreditCardRoundedIcon className='iconPay'/> Parcela em até 10x sem Juros</span>
        </div>
        <div className="cards2">
        <span><PixRoundedIcon className='iconPay'/> Aceitamos Pix</span>
          </div>
          <div className="cards3">
          <span><PaidRoundedIcon className='iconPay'/> Parcelamos sem cartão</span>
          </div>
      </div>
      <div className="text">
            <span>Você Também Pode Gostar</span>
          </div>
        <div className="publicProducts">
          <div className="product">
            <Card/>
          </div>
          <div className="product2">
            <Card/>
          </div>
          <div className="product3">
            <Card/>
          </div>
          <div className="product4">
            <Card/>
          </div>
          <div className="product5">
            <Card/>
          </div>
          <div className="product6">
            <Card/>
          </div>

        </div>
      </div>
    </>
  )
}
