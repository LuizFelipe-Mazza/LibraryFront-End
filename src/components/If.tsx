import { ReactNode } from 'react'
type Props = {
  children: ReactNode
  condition: boolean
}
export function If(props: Props) {
  return props.condition ? props.children : null
}
