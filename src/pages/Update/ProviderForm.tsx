import Aside from '../../assets/undraw_account_re_o7id.svg'
import styles from '../../css/updateUser.module.css'
import BookmarkAddedTwoToneIcon from '@mui/icons-material/BookmarkAddedTwoTone'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { Provider } from '../../Services/registerProvider'
import { useForm } from 'react-hook-form'
import { InputRef } from '../../components/input/InputBase'

export function ProviderForm() {
  const { id } = useParams()


  const {
    register,
    setValue
  } = useForm()

  useEffect(() => {
    async function getByProvider() {
      const { data } = await Provider(Number(id))
      if (data) {
        setValue('name', data.name)
        setValue('name_fant', data.name_fant)
        setValue('city', data.city)
        setValue('state', data.state)
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
            <InputRef type='text' placeholder="Editar Nome"  
            {...register('name')}
            />
          </div>

           <div className={styles.inputEdit}>
            <InputRef type='text' placeholder="Editar Nome Fantasia" {...register('name_fant')}
            />
          </div> 

           <div className={styles.inputEdit}>
            <InputRef type='text' placeholder="Editar Cidade" {...register('city')}/>
          </div>

          <div className={styles.inputEdit}>
            <InputRef type='text' placeholder="Editar Estado" {...register('state')}/>
          </div>

          <div className={styles.inputEdit}>
            <InputRef type='number' placeholder="Editar Cod Postal" {...register('zip_code')} />
          </div>

          <div className={styles.inputEdit}>
            <InputRef type='text' placeholder="Editar Rua" {...register('street')} />
          </div>

          <div className={styles.inputEdit}>
            <InputRef type='number' placeholder="Editar Número" {...register('number')}
            />
          </div>

          <div className={styles.inputEdit}>
            <InputRef type='number' placeholder="Editar Telefone" {...register('phone_number')}
            />
          </div>

          <div className={styles.inputEdit}>
            <InputRef type='number' placeholder="Editar Celular" {...register('cel')} />
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
