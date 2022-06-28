import styles from "../../css/publicheader.module.css";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
export function PublicHeader() {
  return (
    <div className={styles.containerHeader}>
      <nav>
        <h1>
          Bibliotecas <span> Mazza</span>
        </h1>
        <div className={styles.sub}>
          <div className={styles.input}>
            <input type="text" placeholder="Buscar Livro" /><SearchOutlinedIcon className={styles.search}/>

          </div>
        </div>
        <div className={styles.books}>
          <select>
            <option selected value="books">
              Categorias
            </option>
            <option value="books">Algorítimos</option>
            <option value="books">Lógica</option>
            <option value="books">Databases</option>
            <option value="books">Romance</option>
            <option value="books">Jogos</option>
            <option value="books">Ficção</option>
            <option value="books">Animes</option>
          </select>
        </div>
      </nav>
    </div>
  );
}
