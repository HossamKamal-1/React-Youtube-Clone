import { Skeleton, Stack } from '@mui/material';

function VideoCardSkeleton() {
  return (
    <Stack gap={2} maxWidth="100%">
      <Skeleton
        variant="rounded"
        width={388}
        height={200}
        sx={{ bgcolor: 'gray', maxWidth: '100%' }}
        animation="wave"
      />
      <Skeleton
        variant="text"
        width={250}
        height={10}
        sx={{ bgcolor: 'gray', ml: { md: '10px' }, maxWidth: '100%' }}
      />
      <Skeleton
        variant="text"
        width={100}
        height={10}
        sx={{ bgcolor: 'gray', ml: { md: '10px' }, maxWidth: '100%' }}
      />
    </Stack>
  );
}
export default VideoCardSkeleton;
