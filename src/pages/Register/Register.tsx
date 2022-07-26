import { Input } from '../../components'

import PermIdentityRoundedIcon from '@mui/icons-material/PermIdentityRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import CallRoundedIcon from '@mui/icons-material/CallRounded';

import './register.scss'

export function Register() {

  return (
    <div className='Provider'>
      <div className="providerRegister">
        <div className="providerField">
          <h3>Fornecedor <PermIdentityRoundedIcon className='iconCP'/></h3>
          <div className="name">
            <Input name="name" placeholder="Nome Fantasia" />
          </div>
          <div className="cnpj">
            <Input name="cnpj" placeholder="CNPJ" />
          </div>
          <div className="email">
            <Input name="email" placeholder="Email" />
          </div>
        </div>

        <div className="providerContact">
          <h3>Contato <CallRoundedIcon className='iconCP'/> </h3>
          <div className="phoneNumber">
            <Input name="phone_number" placeholder="N Telefone" />
          </div>
          <div className="cel">
            <Input name="cel" placeholder="Celular" />
          </div>
        </div>

        <div className="addressField">
          <h3>Endereço <LocationOnRoundedIcon className='iconCP'/></h3>
          <div className="cityAndStreet">
            <div className="city">
              <Input name="city" placeholder="Cidade" />
            </div>
            <div className="street">
              <Input name="street" placeholder="Rua" />
            </div>
          </div>

          <div className="complementAndNumber">
            <div className="complement">
              <Input name="complement" placeholder="Complemento" />
            </div>

            <div className="number">
              <Input name="number" placeholder="Número" />
            </div>
          </div>

          <div className="zipCodeAndState">
            <div className="zipCode">
              <Input name="zip_code" placeholder="Cód Postal" />
            </div>
            <div className="state">
              <Input name="state" placeholder="Estado" />
            </div>
          </div>
        </div>
      </div>
      <button>cadastrar</button>
    </div>
  )
}
