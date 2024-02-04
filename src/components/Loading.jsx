import { Typography } from '@mui/material';
function Loading({ error, isLoading, children, spinner }) {
  if (isLoading) {
    return spinner;
  } else if (error) {
    return (
      <Typography
        variant="h3"
        color="red"
        textTransform="capitalize"
        textAlign="center"
      >
        {error}
      </Typography>
    );
  }
  return children;
}
export default Loading;
