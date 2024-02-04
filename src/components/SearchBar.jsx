import { IconButton, Paper, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function SearchBar() {
  const [textFieldValue, setTextFieldValue] = useState('');
  const navigate = useNavigate();
  return (
    <Paper
      component="form"
      onSubmit={(e) => {
        e.preventDefault();
        navigate(`/search?q=${textFieldValue.trim()}`);
      }}
      sx={{
        borderRadius: 20,
        boxShadow: 'none',
        px: 2,
        position: 'relative',
      }}
    >
      <TextField
        id="search-basic"
        color="warning"
        label="Search"
        variant="standard"
        value={textFieldValue}
        onChange={(e) => {
          setTextFieldValue(e.target.value);
        }}
        placeholder="Search videos here .."
        sx={{ width: { md: '350px', xs: '200px' } }}
        inputProps={{ style: { paddingRight: '15px', paddingBottom: '10px' } }}
      />
      <IconButton
        sx={{
          position: 'absolute',
          right: '2px',
          top: '50%',
          transform: 'translateY(-50%)',
        }}
        color="warning"
        type="submit"
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
export default SearchBar;
