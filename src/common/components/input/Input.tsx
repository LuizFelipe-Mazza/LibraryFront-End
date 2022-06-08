import React from "react";
import { Props } from "./type";
import { Controller, useForm } from "react-hook-form";
export function Input(props: Props) {
    const {
        control,
        formState:{errors},
    } = useForm();
  return (
    <>
      <Controller
        name={props.name}
        control={control}
        defaultValue={!!props.default ? props.default : ""}
        render={({ field }) => (
          <input placeholder={props.name} {...field} data-test={`input-${props.name}`} />
        )}
      />
      <p>{errors[props.name]?.message}</p>
    </>
  );
}
