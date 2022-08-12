//icons
import {IoReturnDownBack} from "react-icons/io5";

//styling
import './cart.scss'
//images
import Prince from '../../assets/pqnp.webp'
import SelectVariants from "../../components/Select/Select";

export function Cart(){
    async function handleBuy(e:any){
        e.preventDefault();

    }
    return(
        <>
        <div className="allCart">
        <div className="containerCart">
            <div className="imageAreaProduct">
                <img src={Prince} alt="" />
            </div>
            <div className="description">
                <h1>O pequeno príncipe, uma grande aventura pelo espaço
                    pelo mundo a fora, fazendo novas descobertas e 
                    aprendendo coisas novas, venha embarcar nesse mundo
                    de imaginação
                </h1>
                <div className="priceProduct">
                    <p>R$ 127 <small>99</small></p>
                    <span>em até <strong>12x sem juros</strong></span>
                </div>
                <div className="info">
                    <ul>
                        <li>Número de páginas: 200</li>
                        <li>Dimensões: 160 mm largura x 230 mm altura</li>
                        <li>peso: 260g</li>
                        <li>Estimula sua concentração, desperta curiosidade e alimenta a imaginação.</li>
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
                <button onClick={handleBuy} className="buyNow">Comprar Agora</button>
                <button className="addToCart">Adiconar ao Carrinho</button>
            </div>
        </div>
        </div>
        </>
    )
}