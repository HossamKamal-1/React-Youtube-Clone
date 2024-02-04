import { Box, Skeleton } from '@mui/material';
import ChannelCardSkeleton from './ChannelCardSkeleton';

function ChannelDetailsSkeleton() {
  return (
    <Box>
      <Box>
        <Skeleton
          variant="rectangular"
          width="100%"
          height={200}
          animation="wave"
          sx={{ bgcolor: 'grey.700' }}
        />
      </Box>
      <Box>
        <ChannelCardSkeleton sx={{ mt: '-50px' }} />
      </Box>
    </Box>
  );
}
export default ChannelDetailsSkeleton;
