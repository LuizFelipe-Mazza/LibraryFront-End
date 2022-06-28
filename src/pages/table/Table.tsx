import { useState } from 'react'
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid'
import { TableHeader } from './TableHeader'
import Box from '@mui/material/Box'
import '../../css/table.css'

interface Column {
  headerName: string
  sortable: boolean
  noFilter: boolean
}

interface Props {
  data: GridRowsProp<any>
  columns: GridColDef[]
}
//lembrar de criar tipagem para o Props, e adicionar os códigos que o Samuel Passou
export function Table(props: Props) {
  const [filter, setFilter] = useState<any>({})

  function handleSearch(field: string, value: string) {
    setFilter((filter: object) => ({
      ...filter,
      [field]: value,
    }))
  }

  const columns = [
    ...props.columns.map((column) => ({
      ...column,
      sortable: column.sortable ? column.sortable : false,
      disableClickEventBubbling: true,
      renderHeader: () => (
        <TableHeader
          label={column.headerName as string}
          onSearch={(value: any) => handleSearch(column.field, value)}
          value={filter[column.field]}
          noFilter={Boolean(column.filterable)}
        />
      ),
    })),
  ]
  return (
    <div className="containerTable">
      <Box
        sx={{
          maxHeight: 400,
          width:850,
          maxWidth:'900px',
          padding:-1
        }}
      >
        <DataGrid
          rows={props.data}
          columns={columns}
          pageSize={4}
          rowsPerPageOptions={[9]}
          disableColumnMenu
          disableColumnFilter
          disableColumnSelector
          disableSelectionOnClick
         />
      </Box>
    </div>
  )
}
