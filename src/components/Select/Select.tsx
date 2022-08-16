import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import './select.scss'
export default function SelectVariants() {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel className='inputLabel' id="demo-simple-select-standard-label">Quantidade</InputLabel>
        <Select
          className='selected'
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={age}
          onChange={handleChange}
          label="Age"
        >
          <MenuItem value="">
            <em>Nenhum</em>
          </MenuItem>
          <MenuItem className='item' value={1}>1 Unidade</MenuItem>
          <MenuItem className='item' value={2}>2 Unidades</MenuItem>
          <MenuItem className='item' value={4}>4 Unidades</MenuItem>
          <MenuItem className='item' value={8}>8 Unidades</MenuItem>
          <MenuItem className='item' value={10}>10 Unidades</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
