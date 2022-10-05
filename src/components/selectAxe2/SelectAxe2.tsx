import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';

export interface Props {
  value?: string;
  open ?: boolean;
  onChange ?: any;
  data ?: []
}
const SelectAxe2 = ({value , open , onChange , data}:Props) => {
    
  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">قطاع</InputLabel>
      <Select
        value={value}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        open = {open}
        onChange={onChange}
        IconComponent={() => <KeyboardArrowDownRoundedIcon className='position-rtl-icon-select'  />}
        // value={age}
        label="قطاع"
        // onChange={handleChange}
      >
        <MenuItem >Ten</MenuItem>
        <MenuItem >Twenty</MenuItem>
        <MenuItem >Thirty</MenuItem>
      </Select>
    </FormControl>
  );
};
export default SelectAxe2
