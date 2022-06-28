import Aside from '../../assets/undraw_account_re_o7id.svg'
import styles from '../../css/updateUser.module.css'
import BookmarkAddedTwoToneIcon from '@mui/icons-material/BookmarkAddedTwoTone'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Provider } from '../../Services/registerProvider'
import { useFormContext } from 'react-hook-form'
import { Input } from '../../components'

export function ProviderForm() {
  const { id } = useParams()
const [data, setData] = useState(null);

  const {
    setValue
  } = useFormContext()

  useEffect(() => {
    async function getByProvider() {
      const { data } = await Provider(Number(id))
     setData(data)
      if (data) {
        setValue('name', data.name)
        setValue('name_fant', data.name_fant)
        setValue('city', data.city)
        setValue('street', data.street)
        setValue('number', data.number)
        setValue('zip_code', data.zip_code)
        setValue('phone_number', data.phone_number)
        setValue('cel', data.cel)         
      }
      console.log(data);
    }
    getByProvider();
  }, [])

  return (
    <div className={styles.containerUpdate}>
      <aside>
        <img src={Aside} alt="" />
      </aside>

      <form className={styles.updateScreen}>
        <div className={styles.bodyForm}>
          <div className={styles.title}>
            <h1>
              Atualizar <span>Registros</span>
              <small>Fornecedor</small>
            </h1>
          </div>

          <div className={styles.inputEdit}>
            <Input placeholder="Editar Nome"  
            name='name'
            />
          </div>

           <div className={styles.inputEdit}>
            <Input placeholder="Editar Nome Fantasia" name='name_fant'
            />
          </div> 

           <div className={styles.inputEdit}>
            <Input placeholder="Editar Cidade" name='city'/>
          </div>

          <div className={styles.inputEdit}>
            <Input  placeholder="Editar Cod Postal" name='zip_code' />
          </div>

          <div className={styles.inputEdit}>
            <Input placeholder="Editar Rua" name='street' />
          </div>

          <div className={styles.inputEdit}>
            <Input placeholder="Editar Número" name='number' 
            />
          </div>

          <div className={styles.inputEdit}>
            <Input placeholder="Editar Telefone" name='phone_number'
            />
          </div>

          <div className={styles.inputEdit}>
            <Input placeholder="Editar Celular" name='cel' />
          </div> 

          <div className={styles.buttonEdit}>
            <button>
              <BookmarkAddedTwoToneIcon />
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
