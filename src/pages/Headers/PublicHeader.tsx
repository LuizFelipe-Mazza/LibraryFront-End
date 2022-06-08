import styles from "../../css/publicheader.module.css";

export function PublicHeader() {
  return (
    <div className={styles.containerHeader}>
      <nav>
        <h1>
          Bibliotecas <span> Mazza</span>
        </h1>
        <div className={styles.sub}>
          <div className={styles.input}>
            <input type="text" placeholder="Buscar Livro" />
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
          </select>
        </div>
      </nav>
    </div>
  );
}
