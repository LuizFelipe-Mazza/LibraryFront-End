import LocalFireDepartmentRoundedIcon from '@mui/icons-material/LocalFireDepartmentRounded';
import FormatListBulletedRoundedIcon from '@mui/icons-material/FormatListBulletedRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

import './sidebar.scss'

export function Sidebar(){
    return(
        <>
        <div className="containerSidebar">
            <input type="checkbox" id="check"/>
            <div className="menuIcon">
                <label htmlFor="check">
                <MenuRoundedIcon className='iconMenu'/>
                </label>
            </div>
            <div className="sidebar_menu">
                <div className="sidebarTitle">
                    <a href="/"><AccountCircleRoundedIcon className='perfil'/></a>
                    <p>Seja bem Vindo</p>
                <div className="btn_close">
                    <label htmlFor="check">
                    <CloseRoundedIcon className='iconClose'/>
                    </label>
                </div>
                </div>
                <nav className='menu'>
                    <ul>
                    <li><FormatListBulletedRoundedIcon className='icon'/>
                    <a href="/">Lista de Produtos</a>
                    </li>
                    <li><StarRoundedIcon className='icon'/>
                    <a href="/">Lista de Favoritos</a>
                    </li>
                    <li><ShoppingCartRoundedIcon className='icon'/>
                    <a href="/">Meu Carrinho</a>
                    </li>
                    <li><AccountCircleRoundedIcon className='icon'/>
                    <a href="/">Minha Conta</a>
                    </li>
                    <li><LocalFireDepartmentRoundedIcon className='iconFire'/>
                    <a href="/">Torra Livros</a>
                    </li>
                    </ul>
                </nav>
            </div>
        </div>
        </>
    )
}