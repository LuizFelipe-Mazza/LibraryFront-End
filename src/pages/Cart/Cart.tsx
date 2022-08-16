//icons
import {IoReturnDownBack} from "react-icons/io5";

//styling
import './cart.scss'
//images

import SelectVariants from "../../components/Select/Select";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import { showBook } from "../../Services/Book";
import { Book } from "../../Types/type";
import Loading from "../../components/Loading/Loading";

export function Cart(){

    const [book, setBook]= useState<Book>();
    const params =  useParams();
    const [loading, setLoading] = useState(true);
    async function getBooks(product_code:number){

        const b = await showBook(product_code)
        setBook(b)
        setLoading(false)
    }
    useEffect(()=>{
        getBooks(parseInt(params.product_code ||''));
       
    },[])
   

    const navigate = useNavigate()

    async function BuyNow(e:any){
        e.preventDefault();
        Swal.fire({
            title:`${book?.original_name}`,
            text: 'Deseja comprar agora?',
            imageUrl:`${book?.cover_image}`,
            imageWidth: 300,
            imageHeight: 350,
            imageAlt: 'O Pequeno Príncipe',
            confirmButtonText:'Comprar Agora',
            showCancelButton:true,
            cancelButtonText:'Cancelar',
            background: '#202020',
            color:'#fff',
          })
     
    }

    async function HandleNext(e:any){
      e.preventDefault()
      navigate('/mycart')
    }
    if(loading){
        return  <div style={{display:'flex',
        width: '100%',
        height: '100vh',
        alignItems:'center',
        justifyContent:'center'}}><Loading/></div>
    }
    return(
        <>
        <div className="allCart">
        <div className="containerCart">
            <div className="imageAreaProduct">
                <img src={book?.cover_image} alt="" />
            </div>
            <div className="description">
                <h1>{book?.summary}</h1>
                <div className="priceProduct">
                    <p>R$ {book?.price}</p>
                    <span>em até <strong>12x sem juros</strong></span>
                </div>
                <div className="info">
                    <ul>
                        <li> Tradução do nome: {book?.name_translated}</li>
                        <li>Número de páginas: {book?.number_of_pages}</li>
                        <li>Autor: {book?.authors}</li>
                        <li> Ilustrador: {book?.illustrators}</li>
                        <li>peso: 260g</li>
                        <li>{book?.subject}</li>
                        <li>Editora: {book?.name}</li>
                        <li>ISBN: {book?.isbn}</li>
                        <li> Numero do livro:{book?.book_number}</li>
                        <li>Posição na prateleira: {book?.position_on_the_shelf}</li>
                        <li>Codigo do livro: {book?.product_code}</li>
                        {/* <li>Ano da publicação: {book?.year_of_last_publication}</li> */}
                        
                    </ul>
                </div>
            </div>
        </div>
        <div className="paymentContainer">
            <div className="devolution">
                <p><IoReturnDownBack className="back"/> Devolução Grátis</p>
                <small>Você tem 30 dias a partir da data de recebimento.</small>
                <a href="/">Saiba mais</a>
            </div>
            <div className="amount">
                <p>Estoque Disponível</p>
                 <SelectVariants/>
            </div>
            <div className="buttonsCart">
                <button onClick={BuyNow} className="buyNow">Comprar Agora</button>
                <button onClick={HandleNext} className="addToCart">Adiconar ao Carrinho</button>
            </div>
        </div>
        </div>
        </>
    )
}