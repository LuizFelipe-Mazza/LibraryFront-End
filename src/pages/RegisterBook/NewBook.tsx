import CloudUploadRoundedIcon from '@mui/icons-material/CloudUploadRounded';
import SaveRoundedIcon from '@mui/icons-material/SaveRounded';

import './newbook.scss'

export function NewBook() {
  return (
    <>
    <div className="containerBookRegister">
      <aside className="newBook">
        <div className="formRegisterBook">
          <input className='inputBook' type="text" placeholder="Título:" />
        </div>

        <div className="formRegisterBook">
          <input className='inputBook' type="text" placeholder="Editora:" />
        </div>

        <div className="formRegisterBook">
          <input className='inputBook' type="text" placeholder="Data Lançamento:" />
        </div>

        <div className="formRegisterSelect">
          <input className='numberBook' type="text" placeholder="Nº Pag:" />
        <select className='code' name="books" id="#book">
            <option value="" selected >Categorias</option>
            <option value="">Romance</option>
            <option value="">Ficção Científica</option>
            <option value="">Comédia</option>
            <option value="">Ação</option>
            <option value="">Tecnologia</option>
            <option value="">Programação</option>
            <option value="">Terror</option>
            <option value="">Nutrição</option>
            <option value="">História</option>
            <option value="">Bioloigia</option>
            <option value="">Religiosos</option>
        </select>
        </div>
        <div className="formRegisterBookCode">
          <input className='numberBook' type="text" placeholder="N° Livro:" />
          <input className='code' type="text" placeholder="Cod ISBN:" />
        </div>
        <div className="formRegisterBook">
         <textarea placeholder='Resumo' name="" id="">

         </textarea>
        </div>
        <button className='btnSave'><SaveRoundedIcon className='saveIcon'/> Cadastrar</button>
      </aside>
      <main>
        <div className="photoBox">
            <img src="" alt="" />
        </div>
        <button className='btnUpload'><CloudUploadRoundedIcon className='uploadIcon'/> Enviar Foto</button>
      </main>
      </div>
    </>
  )
}