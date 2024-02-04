import { Stack } from '@mui/material';
import VideoCardSkeleton from './VideoCardSkeleton';

function VideoListSkeleton({ sx }) {
  return (
    <Stack gap={2} sx={sx}>
      {Array.from({ length: 20 }, (_, index) => (
        <VideoCardSkeleton key={index} />
      ))}
    </Stack>
  );
}
export default VideoListSkeleton;
