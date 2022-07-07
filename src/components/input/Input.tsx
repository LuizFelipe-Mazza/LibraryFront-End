import { Props } from './type'
import { omit } from 'ramda'
import { Controller, useForm } from 'react-hook-form'
export function Input(props: Props) {
  const {
    control,
    formState: { errors },
  } = useForm()
  const otherFields = omit(['placeholder', 'name', 'type', 'default'], props)
  return (
    <>
      <Controller
        name={props.name}
        control={control}
        defaultValue={!!props.default ? props.default : ''}
        render={({ field }) => (
          <input
            type={props.type}
            placeholder={props.placeholder || props.name}
            {...field}
            {...otherFields}
            data-test={`input-${props.name.toLowerCase().replace(' ', '-')}`}
          />
        )}
      />
      <p>{errors[props.name]?.message}</p>
    </>
  )
}
