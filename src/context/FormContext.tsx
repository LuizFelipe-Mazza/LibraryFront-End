import { ReactNode } from 'react'
import { useForm, FormProvider} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

export default function FormContext({
  children,
  validationSchema,
}: {
  children: ReactNode,
  validationSchema:any
}) {
  const methods = useForm({ resolver: yupResolver(validationSchema) })

  return <FormProvider {...methods}>{children}</FormProvider>
}
