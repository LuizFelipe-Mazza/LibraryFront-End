import LoginRoundedIcon from '@mui/icons-material/LoginRounded';

import "../../css/publicheader.scss";
import DisplaySettingsRoundedIcon from '@mui/icons-material/DisplaySettingsRounded';
import GroupAddRoundedIcon from '@mui/icons-material/GroupAddRounded';
import AlternateEmailRoundedIcon from '@mui/icons-material/AlternateEmailRounded';
import ManageAccountsRoundedIcon from '@mui/icons-material/ManageAccountsRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
export function PublicHeader() {
  return (
    <div className='containerHeader'>
      <nav>
        <div className='mobileMenu'>
          <input id='menu__toggle' type='checkbox' />
          <label className='menuBtn' htmlFor='menu__toggle'  >
            <span></span>
          </label>
          <ul className='menuBox'>
            <li> <a className='menuItem' href="/"><HomeRoundedIcon className='icon'/> Home</a></li>
            <li> <a className='menuItem' href="/"><InfoRoundedIcon className='icon'/> Sobre</a></li>
            <li> <a className='menuItem' href="/"><DisplaySettingsRoundedIcon className='icon'/> Configuração</a></li>
            <li> <a className='menuItem' href="/"><AlternateEmailRoundedIcon className='icon'/> Contato</a></li>
            <li> <a className='menuItem' href="/"><ManageAccountsRoundedIcon className='icon'/> Sua conta</a></li>
          </ul>
        </div>
        <h1>
          Biblioteca<span> Digital </span>
        </h1>
        <div className='sub'>
          <div className='input'>
            <input type="text" placeholder="Buscar Livro" />
          </div>
        </div>

        <div className='login'>
          <button className='enterAccount'><span><LoginRoundedIcon/></span>Entrar</button>
          <button className='createAccount'><span><GroupAddRoundedIcon/></span>Criar Conta</button>
        </div>
      </nav>
    </div>
  );
}
