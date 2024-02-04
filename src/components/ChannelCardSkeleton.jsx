import { Skeleton, Stack } from '@mui/material';

function ChannelCardSkeleton({ sx }) {
  return (
    <Stack alignItems="center" justifyContent="center" gap={2} mb={1} sx={sx}>
      {/* channel img */}
      <Skeleton
        variant="circular"
        width={100}
        height={100}
        sx={{ bgcolor: 'grey.900' }}
      />
      {/* channel name + subscribers */}
      <Skeleton
        variant="rounded"
        width={120}
        height={10}
        sx={{ bgcolor: 'grey.900' }}
      />
      <Skeleton
        variant="rounded"
        width={100}
        height={10}
        sx={{ bgcolor: 'grey.900' }}
      />
    </Stack>
  );
}
export default ChannelCardSkeleton;
