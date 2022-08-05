import api from './axios'

export async function saveBook(product_code:number, original_number:string ){
    return await api.post(`/book',${product_code},${original_number}`)
}
export async function showBook(product_code:number, original_number:string ){
    return await api.get(`/book/${product_code}, ${original_number}`)
}
export async function book(product_code:number){
    return await api.get(`/book/${product_code}`)
}
export async function createBook(name:string,name_translated:string,original_name:string,number_of_pages: number,summary:string,authors:string,illustrators:string, cover_image:string,year_of_last_publication:Date,subject:string, product_code: string,isbn:string,book_number:string,position_on_the_shelf:string ){
    return await api.post(`/createBook', ${name}, ${name_translated},${original_name},${number_of_pages},${summary},${authors},${illustrators},${cover_image},${year_of_last_publication},${subject},${product_code},${isbn},${book_number},${position_on_the_shelf}`)
}
