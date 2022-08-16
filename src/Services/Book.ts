import { Book } from '../Types/type'
import api from './axios'

export async function saveBook(product_code: number, original_name: string) {
  return await api.post(`/book',${product_code},${original_name}`)
}
export async function showBook(product_code: number) {
  const data = await api.get(`/book/${product_code}`)
  console.log(data)
  return data.data
}
export async function ShowAllBooks(): Promise<Book[]> {
  const books: Book[] = [
    {
      name_translated: '',
      original_name: 'O pequeno Principe',
      name: 'O pequeno Principe',
      number_of_pages: 0,
      summary: '',
      authors: 'string',
      illustrators: 'string',
      cover_image: 'string',
      subject: 'string',
      product_code: 1,
      isbn: 'string',
      book_number: 'string',
      position_on_the_shelf: 'string',
      price: 'string',
      weight: 'string',
    },
    {
      name_translated: '',
      original_name: 'O pequeno Principe',
      name: 'O pequeno Principe',
      number_of_pages: 0,
      summary: '',
      authors: 'string',
      illustrators: 'string',
      cover_image: 'string',

      subject: 'string',
      product_code: 2,
      isbn: 'string',
      book_number: 'string',
      position_on_the_shelf: 'string',
      price: 'string',
      weight: 'string',
    },
    {
      name_translated: '',
      original_name: 'O pequeno Principe',
      name: 'O pequeno Principe',
      number_of_pages: 0,
      summary: '',
      authors: 'string',
      illustrators: 'string',
      cover_image: 'string',

      subject: 'string',
      product_code: 3,
      isbn: 'string',
      book_number: 'string',
      position_on_the_shelf: 'string',
      price: 'string',
      weight: 'string',
    },
    {
      name_translated: '',
      original_name: 'O pequeno Principe',
      name: 'O pequeno Principe',
      number_of_pages: 0,
      summary: '',
      authors: 'string',
      illustrators: 'string',
      cover_image: 'string',

      subject: 'string',
      product_code: 4,
      isbn: 'string',
      book_number: 'string',
      position_on_the_shelf: 'string',
      price: 'string',
      weight: 'string',
    },
    {
      name_translated: '',
      original_name: 'O pequeno Principe',
      name: 'O pequeno Principe',
      number_of_pages: 0,
      summary: '',
      authors: 'string',
      illustrators: 'string',
      cover_image: 'string',

      subject: 'string',
      product_code: 5,
      isbn: 'string',
      book_number: 'string',
      position_on_the_shelf: 'string',
      price: 'string',
      weight: 'string',
    },
  ]

  return await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(books)
      api.get('/book')
    }, 2000)
  })
}
export async function createBook(
  name: string,
  name_translated: string,
  original_name: string,
  number_of_pages: number,
  summary: string,
  authors: string,
  illustrators: string,
  cover_image: string,
  year_of_last_publication: Date,
  subject: string,
  product_code: string,
  isbn: string,
  book_number: string,
  position_on_the_shelf: string,
  price: number,
  weight: number,
) {
  return await api.post(
    `/createBook', ${name}, ${name_translated},${original_name},${number_of_pages},${summary},${authors},${illustrators},${cover_image},${year_of_last_publication},${subject},${product_code},${isbn},${book_number},${position_on_the_shelf},${price},${weight}`,
  )
}
