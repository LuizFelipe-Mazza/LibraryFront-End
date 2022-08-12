import Principe from '../../assets/pqnp.webp';
import {TbTrashX} from "react-icons/tb";
import {IoIosAdd} from "react-icons/io";
import {RiSubtractLine} from "react-icons/ri";
import './myCart.scss';

export function MyCart(){
    return(
        <>
        <div className="myShopping">
            <div className="title">
                <h1>Meu Carrinho</h1>
                </div>
                <div className="container">
                   <div className="image">
                    <img src={Principe} alt="O Pequeno Príncipe Livro" />
                    </div>
                    <div className="descriptionShop">
                        <h2>O Pequeno Príncipe</h2>
                        <p>Quantidade de Páginas: <strong>127</strong></p>
                        <p>Editora: <strong>Editora Fluano de tal</strong></p>
                        <p>Código do Produto: <strong>0000123928</strong></p>
                        <div className="options">
                           <div className="delete">
                            <button><TbTrashX className='trash'/></button>
                           </div>
                           <div className="subtract">
                            <button><RiSubtractLine className='outItem'/></button>
                           </div>
                           <div className="add">
                            <button><IoIosAdd className='addItem'/></button>
                           </div>
                        </div>
                    </div>
                </div>
           
        </div>
        </>
    )
}