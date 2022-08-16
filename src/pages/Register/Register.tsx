import { Input } from '../../components'

import PermIdentityRoundedIcon from '@mui/icons-material/PermIdentityRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import CallRoundedIcon from '@mui/icons-material/CallRounded';

import './register.scss'
import { useState } from 'react';
import { createProvider } from '../../Services/registerProvider';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

export function Register() {
  const navigate = useNavigate();
  const [nameFant, setNameFant] = useState('');
  const [name, setName] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [cel, setCel] = useState('');
  const [city, setCity] = useState('');
  const [street, setStreet] = useState('');
  const [complement, setComplement] = useState('');
  const [number, setNumber] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');

  async function handleRegisterProvider(event:any){
    event.preventDefault();
    if(
      !name ||
      !nameFant ||
      !cnpj ||
      !email ||
      !phone || 
      !cel ||
      !city || 
      !street ||
      !complement ||
      !number||
      !zipCode||
      !state
    ){
      alert('Os Campos estão Vazios')
    }
     createProvider(name, nameFant, cnpj, email, phone, cel, city, street, complement, number, zipCode, state)
     Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Conta Criada',
      color:'#7d5fff',
      background:'#282829',
      showConfirmButton: false,
      timer: 1500
    })
  }

  return (
    <div className='Provider'>
      <div className="providerRegister">
        <div className="providerField">
          <h3>Fornecedor <PermIdentityRoundedIcon className='iconCP'/></h3>
          <div className="name">
            <Input name="name_fant" placeholder="Nome Fantasia"
            value={nameFant}
            onChange={e => setNameFant(e.target.value)}
            />
          </div>

          <div className="name">
            <Input name="name" placeholder="Nome"
            value={name}
            onChange={e => setName(e.target.value)}
            />
          </div>

          <div className="cnpj">
            <Input name="cnpj" placeholder="CNPJ"
             value={cnpj}
             onChange={e => setCnpj(e.target.value)}
            />
          </div>
        
        </div>

        <div className="providerContact">
          <h3>Contato <CallRoundedIcon className='iconCP'/> </h3>
          <div className="email">
            <Input name="email" placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className="phoneNumber">
            <Input type='number' name="phone_number" placeholder="N Telefone"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            />
          </div>
          <div className="cel">
            <Input
            type='number'
            name="cel" placeholder="Celular" 
            value={cel}
            onChange={e => setCel(e.target.value)}
            />
          </div>
        </div>

        <div className="addressField">
          <h3>Endereço <LocationOnRoundedIcon className='iconCP'/></h3>
          <div className="cityAndStreet">
            <div className="city">
              <Input 
              name="city" 
              placeholder="Cidade" 
              value={city}
              onChange={e => setCity(e.target.value)}
              />
            </div>
            <div className="street">
              <Input 
              type='text'
              name="street" 
              placeholder="Rua"
              value={street}
              onChange={e => setStreet(e.target.value)}
              />
            </div>
          </div>

          <div className="complementAndNumber">
            <div className="complement">
              <Input 
              name="comp" 
              placeholder="Complemento"
              value={complement}
              onChange={e => setComplement(e.target.value)}
              />
            </div>

            <div className="number">
              <Input 
              name="number" 
              placeholder="Número" 
              value={number}
              onChange={e => setNumber(e.target.value)}
              />
            </div>
          </div>

          <div className="zipCodeAndState">
            <div className="zipCode">
              <Input 
              name="zip_code" 
              placeholder="Cód Postal" 
              value={zipCode}
              onChange={e => setZipCode(e.target.value)}
              />
            </div>
            <div className="state">
              <Input 
              required
              name="state" 
              placeholder="Estado" 
              value={state}
              onChange={e => setState(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
      <button onClick={handleRegisterProvider}>cadastrar</button>
    </div>
  )
}
