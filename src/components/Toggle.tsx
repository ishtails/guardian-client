import Switch from '@mui/material/Switch';
import * as React from 'react';

const Toggle = () => {
    const [checked, setChecked] = React.useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  return (
    <div>
        <Switch
    checked={checked}
    onChange={handleChange}
    inputProps={{ 'aria-label': 'controlled' }}
    />
    </div>
  )
}

export default Toggle
