import { Box, Typography } from '@mui/material'
import { useState } from 'react'
import { Input } from '../../components'
import '../../css/tableHeader.css'
type Props = {
  label: string
  onSearch: (value: string) => void
  value: string
  noFilter: boolean
}

export function TableHeader(props: Props) {
  const [isVisible, setIsVisible] = useState(false)

  function handleBlur(event: any) {
    console.log(event)
    props.onSearch(props.value)
  }

  function enableSearch() {
    document.addEventListener('dblclick', () => {
      if (isVisible === false) {
        setIsVisible(true)
      }
    })
  }

  return (
    <>
      <Box
        onClick={enableSearch}
        sx={{
          minHeight: '100%',
          width: '100px',
          cursor: 'pointer',
        }}
      >
        {!isVisible && <Typography>{props.label}</Typography>}

        <div className="inputFilter">
          {isVisible && (
            <Input
              className="inputTable"
              type="text"
              name={props.label}
              onBlur={handleBlur}
            />
          )}
        </div>
      </Box>
    </>
  )
}
