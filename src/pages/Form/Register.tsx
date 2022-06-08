import { Input } from "../../common/components";
import "../../css/global.css";
import styles from "../../css/register.module.css";

export function Register() {
  return (
    <div className={styles.containerForm}>
      <header className={styles.header}></header>
      <div className={styles.container}>
        <form action="">
          <h1>
            Cadastro do <span>Fornecedor</span>
          </h1>

          <div className={styles.caixa}>
            <div className={styles.minContainer}>
              <h4>Nome Fantasia</h4>
              <div className={styles.info}>
              <Input name={"Insira Nome Fantasia"} />
              </div>
            </div>

            <div className={styles.minContainer}>
              <h4>Cidade</h4>
              <div className={styles.info}>
                <Input name={"Insira a Cidade"} />
              </div>
            </div>
          </div>

          <div className={styles.caixa}>
            <div className={styles.minContainer}>
              <h4>Nome</h4>
              <div className={styles.info}>
                <Input name={"Insira o Nome"} />
              </div>
            </div>

            <div className={styles.minContainer}>
              <h4>Complemento</h4>
              <div className={styles.info}>
                <Input name={" Insira o Complemento"} />
              </div>
            </div>
          </div>

          <div className={styles.caixa}>
            <div className={styles.minContainer}>
              <h4>CNPJ</h4>
              <div className={styles.info}>
                <Input name={"Insira o CNPJ"} />
              </div>
            </div>

            <div className={styles.minContainer}>
              <h4>Código Postal</h4>
              <div className={styles.info}>
                <Input name={"Insira o Código Postal"} />
              </div>
            </div>
          </div>

          <div className={styles.caixa}>
            <div className={styles.minContainer}>
              <h4>Email</h4>
              <div className={styles.info}>
                <Input name={"Insira o E-mail"} />
              </div>
            </div>

            <div className={styles.minContainer}>
              <h4>Rua</h4>
              <div className={styles.info}>
                <Input name={"Insira a Rua"} />
              </div>
            </div>
          </div>

          <div className={styles.caixa}>
            <div className={styles.minContainer}>
              <h4>Celular</h4>
              <div className={styles.info}>
                <Input name={"Insira o N¨ Celular"} />
              </div>
            </div>

            <div className={styles.minContainer}>
              <h4>Número</h4>
              <div className={styles.info}>
                <Input name={"Insira o Número Complemento"} />
              </div>
            </div>
          </div>

          <div className={styles.caixa}>
            <div className={styles.minContainer}>
              <h4>Telefone</h4>
              <div className={styles.info}>
                <Input name={"Insira o Telefone"} />
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
        </form>
      </div>
    </div>
  );
}
