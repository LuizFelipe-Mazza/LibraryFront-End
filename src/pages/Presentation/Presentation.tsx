import styles from './presentation.module.css'
import book from '../../assets/reading.png'
import nextPage from '../../assets/right.png'
import { useNavigate } from 'react-router-dom'
export function Presentation() {

  let navigate = useNavigate()

  function handleSubmitPage(event: any) {
    event.preventDefault()
    navigate('/aboutlibrary')
  }
  return (
    <div className={styles.containerHome}>
      <div className={styles.containerInitial}>
        <div className={styles.content}>
          <img height={150} width={150} src={book} alt="" />
        </div>
        <div className={styles.title}>
          <h1>
            Bem vindo a Livraria <span>Mazza</span>
          </h1>
        </div>
        <button onClick={ handleSubmitPage} className={styles.btnInit}>
          <img
            className={styles.next}
            height={30}
            width={30}
            src={nextPage}
            alt=""
          />
        </button>
      </div>
    </div>
  )
}
