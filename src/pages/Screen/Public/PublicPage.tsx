import { useNavigate } from 'react-router-dom'
import './publicPage.scss'

import Livro from '../../../assets/undraw_reading_time_re_phf7.svg'

import { Sidebar } from '../../../components/Sidebar/Sidebar';
import { Footer } from '../../../components/Footer/Footer';

import CreditCardRoundedIcon from '@mui/icons-material/CreditCardRounded';
import PixRoundedIcon from '@mui/icons-material/PixRounded';
import PaidRoundedIcon from '@mui/icons-material/PaidRounded';
import { Card } from '../../../components/Card/Card';

import { useEffect, useState } from 'react';
import { ShowAllBooks, showBook } from '../../../Services/Book';
import { Book } from '../../../Types/type';
import Loading from '../../../components/Loading/Loading';


export function PublicPage() {
  const[books, setBooks] = useState<Book[]>([] as Book[]);
  const navigate = useNavigate()


  useEffect(()=>{
    ShowAllBooks().then(b =>{
      setBooks(b)
    })
  },[])

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
          {
            !books.length  ?
            <div style={{display:'flex',
            width: '100%',
            justifyContent:'center'
          }}><Loading/></div>  : books.map((book:Book) => (
              <Card key={book.product_code} name={book.name}
            name_translated={book.name_translated}
            original_name={book.original_name}
            number_of_pages={book.number_of_pages}
            summary={book.summary}
            authors={book.authors}
            illustrators={book.illustrators}
            cover_image={book.cover_image}
            subject={book.subject}
            product_code={book.product_code}
            isbn={book.isbn}
            book_number={book.book_number}
            price={book.price}
            weight={book.weight}
            position_on_the_shelf={book.position_on_the_shelf} />
            ))
          }
        </div>
      </div>
      <Footer/>
    </>
  )
}
