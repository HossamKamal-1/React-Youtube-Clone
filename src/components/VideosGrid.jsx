import { Box, } from '@mui/material';
import { Fragment } from 'react';
import VideoCard from './VideoCard';
import ChannelCard from './ChannelCard';

function VideosGrid({ videos }) {
  if (!videos) return <></>;
  return (
    <Box
      gridTemplateColumns="repeat(auto-fill,minmax(300px,1fr))"
      display="grid"
      gap={3}
      py={2}
    >
      {videos.map((item, index) => (
        <Fragment key={index}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channel={item} />}
        </Fragment>
      ))}
    </Box>
  );
}
export default VideosGrid;
