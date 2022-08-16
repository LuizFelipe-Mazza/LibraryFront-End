import api from './axios'

export async function savePublishing(id:number, name:string ){
    return await api.post(`/publishing',${id},${name}`)
}
export async function showPublishing(id:number, name:string ){
    return await api.get(`/publishing/${id}, ${name}`)
}
export async function publishing(id:number){
    return await api.get(`/publishing/${id}`)
}
export async function createPublishing(id:number,name:string,telephone:string,road:string,number:string,district:string,city:string,state:string,site:string ){
    return await api.post(`/createPublishing', ${id}, ${name},${telephone},${road},${number},${district},${city},${state},${site}`)
}
