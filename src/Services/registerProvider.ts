
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