import { Box, Container, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import { logo } from '../utils/constants';
import { SearchBar } from './';
function Navbar() {
  return (
    <Box
      sx={{ bgcolor: 'black', transition: '0.3s padding ease' }}
      position="sticky"
      top={0}
      zIndex={1000}
      paddingY={3}
    >
      <Container maxWidth={false}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Link to="/">
            <img src={logo} alt="logo" height={45} />
          </Link>
          <SearchBar />
        </Stack>
      </Container>
    </Box>
  );
}
export default Navbar;
