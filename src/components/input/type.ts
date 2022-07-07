import {InputHTMLAttributes } from "react";

export type Props = InputHTMLAttributes<HTMLInputElement> & {
    // placeholder:string;
     name: string;
     default?: any;
    // type?: "string" | "cel" | "checkbox" | 'password';
  };