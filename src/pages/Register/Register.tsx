import { SubmitHandler, useFormContext } from 'react-hook-form'
import { Button, Input } from '../../components'
import { DataProvider } from './type'

import styles from './register.module.css'
import '../../css/global.css'


export function Register() {
  const { handleSubmit } = useFormContext<DataProvider>()

  const onSubmit: SubmitHandler<DataProvider> = (data) => console.log(data)

  return (
    <div className={styles.containerForm}>
      <header className={styles.header}></header>
    
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.container}>
            <h1>
              Cadastro do <span>Fornecedor</span>
            </h1>

            <div className={styles.caixa}>
              <div className={styles.minContainer}>
                <h4>Nome Fantasia</h4>
                <div className={styles.info}>
                  <Input placeholder="Insira Nome Fantasia" name="name_fant" />
                </div>
              </div>
              {/* colocar o name pois é  obrigatório e passar o formProvider por volta do Form */}
              <div className={styles.minContainer}>
                <h4>Cidade</h4>
                <div className={styles.info}>
                  <Input placeholder="Insira a Cidade" name="city" />
                </div>
              </div>
            </div>

            <div className={styles.caixa}>
              <div className={styles.minContainer}>
                <h4>Nome</h4>
                <div className={styles.info}>
                  <Input placeholder="Insira o Nome" name="name" />
                </div>
              </div>

              <div className={styles.minContainer}>
                <h4>Complemento</h4>
                <div className={styles.info}>
                <Input placeholder="Insira o Complemento" name="comp" />
                </div>
              </div>
            </div>

            <div className={styles.caixa}>
              <div className={styles.minContainer}>
                <h4>CNPJ</h4>
                <div className={styles.info}>
                  <Input placeholder="Insira o CNPJ" name="cnpj" />
                </div>
              </div>

              <div className={styles.minContainer}>
                <h4>Código Postal</h4>
                <div className={styles.info}>
                  <Input placeholder="Insira o Código Postal" name="zip_code" />
                </div>
              </div>
            </div>

            <div className={styles.caixa}>
              <div className={styles.minContainer}>
                <h4>Email</h4>
                <div className={styles.info}>
                  <Input placeholder="Insira o E-mail" name="email" />
                </div>
              </div>

              <div className={styles.minContainer}>
                <h4>Rua</h4>
                <div className={styles.info}>
                  <Input placeholder="Insira a Rua" name="street" />
                </div>
              </div>
            </div>

            <div className={styles.caixa}>
              <div className={styles.minContainer}>
                <h4>Celular</h4>
                <div className={styles.info}>
                  <Input placeholder="Insira o Nº de Celular" name="cel" />
                </div>
              </div>

              <div className={styles.minContainer}>
                <h4>Número</h4>
                <div className={styles.info}>
                  <Input
                    placeholder="Insira o Número Complemento"
                    name="number"
                  />
                </div>
              </div>
            </div>

            <div className={styles.caixa}>
              <div className={styles.minContainer}>
                <h4>Telefone</h4>
                <div className={styles.info}>
                  <Input placeholder="Insira o Telefone" name="phone_number" />
                </div>
              </div>

              <div className={styles.minContainer}>
                <h4>Estado</h4>
                <div className={styles.info}>
                  <select>
                    <option selected value="State">
                      SP
                    </option>
                    <option value="State">RJ</option>
                    <option value="State">AM</option>
                    <option value="State">RS</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <Button type="submit" onClick={handleSubmit(onSubmit)}>
            Cadastrar
          </Button>
        </form>
 
    </div>
  )
}
