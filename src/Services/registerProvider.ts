
import api from './axios'

export async function saveProvider(id:number, name:string, ){
return await api.post('/register',{id, name})
}
export async function showProvider(page:number, pageSize:number){
    return await api.get(`/provider/paginate/${page}, ${pageSize}`)
}
export async function Provider(id:number){
    return await api.get(`/showprovider/${id}`)
}
export async function createProvider(name:string, nameFant:string, cnpj:string, email:string, street:string, city:string, complement:string, phone:string, number:string,cel:string,zipCode:string, state:string ){
    return await api.post('/createprovider', {name, nameFant, cnpj, email, street, city, number, complement, phone, cel, zipCode, state})
}