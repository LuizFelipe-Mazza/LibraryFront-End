import CloudUploadRoundedIcon from '@mui/icons-material/CloudUploadRounded';
import SaveRoundedIcon from '@mui/icons-material/SaveRounded';

 import {useState} from 'react';
import './newbook.scss'
import Swal from "sweetalert2";


export function NewBook() {
  const [name_translated, setNameTranslated] = useState('');
  const [name_original, setNameOriginal] = useState('');
  const [name, setName] = useState('');
  const [number_of_pages, setNumberOfPages] = useState('');
  const [summary, setSummary] = useState('');
  const [author, setAuthor] = useState('');
  const[illustrator, setIllustrator] = useState('');
  const[cover_image, setCoverImage] = useState('');
  const[year_of_last_publication, setYearOfLastPublication] = useState('');
  const[subject, setSubject] = useState('');
  const[isbn, setIsbn] = useState('');
  const [book_number, setBookNumber] = useState('');
  const[position_on_the_shelf, setPositionOnTheShelf] = useState('');
  const [product_code, setProductCode] = useState('');
  


    async function handleNewBook(e:any){
      e.preventDefault();
      if (!name_translated || !name_original || !name || !number_of_pages || !summary || !author || !illustrator || !cover_image || !year_of_last_publication || !subject || !isbn || !book_number || !position_on_the_shelf || !product_code) {
       
      }
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Livro cadastrado com sucesso!',
        showConfirmButton: false,
        timer: 1500
      })
     
    }

  return (
    <>
    <div className="containerBookRegister">
      <aside className="newBook">
        <div className="formRegisterBook">
          <input className='inputBook' 
          name='titl'
          type="text" 
          placeholder="Título:" 
          minLength={4} 
          maxLength={12} 
          value={name_original}
          onChange={e => setNameOriginal(e.target.value)}
          />
        </div>

        <div className="formRegisterBook">
          <input className='inputBook'
           name="subTitulo"
            type="text"
             placeholder="Nome Traduzido:" 
             minLength={4}
              maxLength={12} 
              value={name_translated}
              onChange={e => setNameTranslated(e.target.value)}/>
        </div>
        <div className="formRegisterBook">
          <input className='inputBook'
            name="nome"
           type="text" 
           placeholder="Editora:"
            minLength={5}
            maxLength={8} 
            value={name}
            onChange={e => setName(e.target.value)}/>
            
        </div>
        <div className="formRegisterBook">
          <input className='inputBook'
            name="number_of_pages"
           type="text" 
           placeholder="Número de Páginas:"
            minLength={5}
            maxLength={8} 
            value={number_of_pages}
            onChange={e => setNumberOfPages(e.target.value)}/>  
        </div>
        
     
        <div className="formRegisterBook">
          <input className='inputBook'
            name="Author"
           type="text" 
           placeholder="Autor:"
            minLength={5}
            maxLength={8} 
            value={author}
            onChange={e => setAuthor(e.target.value)}/>  
        </div>

        <div className="formRegisterBook">
          <input className='inputBook'
            name="illustrator"
           type="text" 
           placeholder="Ilustrador:"
            minLength={5}
            maxLength={8} 
            value={illustrator}
            onChange={e => setIllustrator(e.target.value)}/>  
        </div>

       
        <div className="formRegisterBook">
          <input className='inputBook'
            name="year_of_last_publication"
           type="text" 
           placeholder="Ano da última publicação:"
            minLength={5}
            maxLength={8} 
            value={year_of_last_publication}
            onChange={e => setYearOfLastPublication (e.target.value)}/>
            
        </div>
       
            
       
        <div className="formRegisterBook">
          <input className='inputBook'
            name="isbn"
           type="text" 
           placeholder="ISBN:"
            minLength={5}
            maxLength={8} 
            value={isbn}
            onChange={e => setIsbn (e.target.value)}/>       
        </div>

        <div className="formRegisterBook">
          <input className='inputBook'
            name="position_on_the_shelf"
           type="text" 
           placeholder="Posição na estante:"
            minLength={5}
            maxLength={8} 
            value={position_on_the_shelf}
            onChange={e => setPositionOnTheShelf (e.target.value)}/>
            
        </div>
        <div className="formRegisterBook">
          <input className='inputBook'
            name="product_code"
           type="text" 
           placeholder="Código do Produto:"
            minLength={5}
            maxLength={8} 
            value={product_code}
            onChange={e => setProductCode (e.target.value)}/>
            
        </div>
      
        <div className="formRegisterSelect">
          <input className='numberBook' type="text" placeholder="Nº Pag:" minLength={1} maxLength={5}
          value={number_of_pages}
          onChange={e => setNumberOfPages (e.target.value)}/>

        <select value={subject} name="assunto" onChange={e => setSubject (e.target.value)}>
            <option  defaultValue={subject} >Categorias</option>
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
          <input className='numberBook' type={'date'} placeholder="N° Livro:" minLength={5} maxLength={12}
          value={book_number}
          onChange={e => setBookNumber(e.target.value)}
          
          />
          <input className='code' type="text" placeholder="Cod ISBN:" 
          value={product_code}
          onChange={e => setProductCode(e.target.value)}/>
        </div>
        <div className="formRegisterBook">
         <textarea placeholder='Resumo' minLength={5} maxLength={12}  value={summary}
          onChange={e => setSummary(e.target.value)}>

         </textarea>
        </div>
        <button className='btnSave' onClick={handleNewBook}><SaveRoundedIcon className='saveIcon'/> Cadastrar</button>
      </aside>
      <main>
        <div className="photoBox">
            <input type={'file'}
            value={cover_image}
            placeholder="Imagem da capa:"
            onChange={e => setCoverImage(e.target.value)}/>

          
        </div>
        <button className='btnUpload'><CloudUploadRoundedIcon className='uploadIcon'/> Enviar Foto</button>
      </main>
      </div>
    </>
  )
}
