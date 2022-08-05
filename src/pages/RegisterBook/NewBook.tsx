import CloudUploadRoundedIcon from '@mui/icons-material/CloudUploadRounded';
import SaveRoundedIcon from '@mui/icons-material/SaveRounded';

import './newbook.scss'

export function NewBook() {
  
  return (
    <>
    <div className="containerBookRegister">
      <aside className="newBook">
        <div className="formRegisterBook">
          <input className='inputBook' type="text" placeholder="Título:" minLength={4} maxLength={12} />
        </div>

        <div className="formRegisterBook">
          <input className='inputBook' type="text" placeholder="Editora:" minLength={4} maxLength={12} />
        </div>

        <div className="formRegisterBook">
          <input className='inputBook' type="text" placeholder="Data Lançamento:" minLength={5} maxLength={8} />
        </div>

        <div className="formRegisterSelect">
          <input className='numberBook' type="text" placeholder="Nº Pag:" minLength={1} maxLength={5} />
        <select className='code' name="books" id="#book">
            <option  defaultValue={'Categoria'} >Categorias</option>
            <option value="Romance">Romance</option>
            <option value="Ficção Científica">Ficção Científica</option>
            <option value="Comédia">Comédia</option>
            <option value="Ação">Ação</option>
            <option value="Tecnologia">Tecnologia</option>
            <option value="Programação">Programação</option>
            <option value="Terror">Terror</option>
            <option value="Nutrição">Nutrição</option>
            <option value="História">História</option>
            <option value="Bioloigia">Bioloigia</option>
            <option value="Religiosos">Religiosos</option>
        </select>
        </div>
        <div className="formRegisterBookCode">
          <input className='numberBook' type={'date'} placeholder="N° Livro:" minLength={5} maxLength={12} />
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
            <input type={'file'} />
        </div>
        <button className='btnUpload'><CloudUploadRoundedIcon className='uploadIcon'/> Enviar Foto</button>
      </main>
      </div>
    </>
  )
}
