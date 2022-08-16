import { ReactNode } from 'react';
export type Book = {
    name_translated: string,
    original_name: string,
    name: string,
    number_of_pages: number,
    summary: string,
    authors: string,
    illustrators: string,
    cover_image: string,
    year_of_last_publication:Date,
    subject : string,
    product_code?: number,
    isbn: string,
    book_number: string,
    price:string,
    weight: string,
    position_on_the_shelf:string,
    children:ReactNode;
  }