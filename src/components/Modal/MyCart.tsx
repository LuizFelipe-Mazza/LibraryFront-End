
import {TbTrashX} from "react-icons/tb";
import {IoIosAdd} from "react-icons/io";
import {RiSubtractLine} from "react-icons/ri";
import './myCart.scss';
import { useState } from 'react';

export function MyCart() {
    const [count, setCount] = useState(0);
    return(
        <>
        <div className="myShopping">
            <div className="title">
                <h1>Meu Carrinho</h1>
                </div>
                <div className="container">
                   <div className="image">
                    <div className="image-container">
                    <h3>Imagem da Capa</h3>
                    {/* <img src={} alt={`livro: ${original_name}`}/> */}
                    </div>
                    
                    </div>
                    <div className="descriptionShop">
                        {/* <h2>{original_name}</h2>
                        <p>Quantidade de Páginas: <strong>{number_of_pages}</strong></p>
                        <p>Editora: <strong>{name}</strong></p>
                        <p>Código do Produto: <strong>{product_code}</strong></p> */}
                        <div className="options">
                           <div className="delete">
                            <button><TbTrashX className='trash'/></button>
                           </div>
                           <div className="containerOptions">

                           <div className="subtract">
                            <button onClick={() => setCount(count - 1)}><RiSubtractLine className='outItem'/></button>
                           </div>
                           <input className='count' type="number" 
                           value={count}
                           onChange ={(e:any)=> setCount(e.target.value)}
                           />
                           <div className="add">
                            <button onClick={() => setCount(count + 1)} ><IoIosAdd className='addItem'/></button>
                           </div>
                           </div>
                        </div>
                    </div>
                </div>
                <button className='buttonBuy'>Comprar Agora</button>
        </div>
        </>
    )
}