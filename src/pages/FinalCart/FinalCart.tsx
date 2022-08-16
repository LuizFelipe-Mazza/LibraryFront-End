import { useEffect, useState } from 'react'
import { ShowAllBooks } from '../../Services/Book'
import { MyCart } from '../../components/Modal/MyCart'
import { Book } from '../../Types/type'

import Loading from '../../components/Loading/Loading'
import './finalCart.scss';

export function FinalCart() {
  const [books, setBooks] = useState<Book[]>([] as Book[])

  useEffect(()=>{
    ShowAllBooks().then(b =>{
      setBooks(b)
    })
  },[])
  
  return (
    <>
      <div className="containerFinal">
        <div className="title">
          <h1>Meu Carrinho</h1>
        </div>
        <div className="allCarts">
        {!books.length ? (
          <div
            style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
            <Loading />
          </div>
        ) : (
          books.map((book: Book) => (
            <MyCart
              key={book.product_code}
              name={book.name}
              name_translated={book.name_translated}
              original_name={book.original_name}
              number_of_pages={book.number_of_pages}
              summary={book.summary}
              authors={book.authors}
              illustrators={book.illustrators}
              cover_image={book.cover_image}
              subject={book.subject}
              product_code={book.product_code}
              isbn={book.isbn}
              book_number={book.book_number}
              price={book.price}
              weight={book.weight}
              position_on_the_shelf={book.position_on_the_shelf}
             /> ))
        )}

      </div>
      <div className="buttons">
    <button className="buttonBuy">Comprar Agora</button>
      </div>
      </div>
    </>
  )
}
