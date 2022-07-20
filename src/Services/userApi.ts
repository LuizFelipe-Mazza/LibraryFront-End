
import api from './axios'

export async function save(id:number, name:string, ){
return await api.post('/updateuser',{id, name})
}
export async function showUserList(){
    return await api.get('/provider/paginate')
}
export async function oneUser(id:number){
    return await api.get(`/user/${id}`)
}
export async function createUser(email:string, password:string, name:string){
    return await api.post('/createuser', {email,password,name})
}
export async function login(email:string, password:string){
    return await api.post('/login',{email, password})
}