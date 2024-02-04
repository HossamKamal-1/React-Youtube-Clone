import { Box, Container, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <Stack textAlign="center" height="calc(100vh - 101px)" justifyContent="center">
      <Container maxWidth={false}>
        <Box>
          <Typography color="red" variant="h3">
            404
          </Typography>
          <Typography color="white" variant="h2" mb="10px">
            Page Not Found
          </Typography>
          <Link to="/" replace>
            <Typography color="primary" variant="h4">
              Go back to homepage
            </Typography>
          </Link>
        </Box>
      </Container>
    </Stack>
  );
}
export default NotFoundPage;
