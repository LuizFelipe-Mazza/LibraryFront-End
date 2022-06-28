
import api from './axios'

export async function saveProvider(id:number, name:string, ){
return await api.post('/register',{id, name})
}
export async function showProvider(){
    return await api.get('/provider/paginate')
}
export async function Provider(id:number){
    return await api.get(`/showprovider/${id}`)
}