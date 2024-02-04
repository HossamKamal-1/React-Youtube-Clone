import {  useParams } from 'react-router-dom';
import useYoutubeAPI from '../utils/useYoutubeAPI';
import { useMemo } from 'react';
import { Box, Container } from '@mui/material';
import {
  ChannelCard,
  ChannelDetailsSkeleton,
  Loading,
  VideosGrid,
} from '../components';
import { CirclesWithBar } from 'react-loader-spinner';

function ChannelPage() {
  const { id } = useParams();
  const channelVideosQueryParams = useMemo(
    () => ({
      channelId: id,
      part: 'snippet,id',
      order: 'date',
      maxResults: '50',
    }),
    [id]
  );
  const channelDetailsQueryParams = useMemo(
    () => ({
      part: 'snippet,statistics',
      id,
    }),
    [id]
  );
  const [channelDetails, channelDetailsIsLoading, channelDetailsError] =
    useYoutubeAPI('/channels', channelDetailsQueryParams);
  const [channelVideos, channelVideosIsLoading, channelVideosError] =
    useYoutubeAPI('/search', channelVideosQueryParams);
  console.log(channelDetails);
  console.log(channelDetailsIsLoading);
  console.log(channelDetailsError);
  console.log(channelVideos);
  console.log(channelVideosIsLoading);
  console.log(channelVideosError);
  return (
    <Box>
      <Loading
        isLoading={channelDetailsIsLoading}
        error={channelDetailsError}
        spinner={<ChannelDetailsSkeleton />}
      >
        <Box>
          <Box>
            <Box
              height={300}
              sx={{
                background:
                  'linear-gradient(90deg, rgba(78,158,226,1) 0%, rgba(34,15,82,1) 100%)',
              }}
            />
          </Box>
          <Box mb={4}>
            {channelDetails ? (
              <ChannelCard channel={channelDetails[0]} sx={{ mt: '-50px' }} />
            ) : (
              <></>
            )}
          </Box>
        </Box>
      </Loading>
      <Box>
        <Container maxWidth={false}>
          <Loading
            isLoading={channelVideosIsLoading}
            error={channelVideosError}
            spinner={
              <CirclesWithBar
                color="red"
                wrapperStyle={{ justifyContent: 'center', marginTop: '50px' }}
              />
            }
          >
            <VideosGrid videos={channelVideos} />
          </Loading>
        </Container>
      </Box>
    </Box>
  );
}
export default ChannelPage;
