import { Box, Container, Stack, Typography } from '@mui/material';
import { FidgetSpinner } from 'react-loader-spinner';
import ReactPlayer from 'react-player/lazy';
import { Link, useParams } from 'react-router-dom';
import { Loading, VideoListSkeleton, VideosList } from '../components';
import useYoutubeAPI from '../utils/useYoutubeAPI';
import { useMemo } from 'react';
import { CheckCircle, ThumbUpSharp, Visibility } from '@mui/icons-material';

function VideoPage() {
  const { id } = useParams();
  const detailsQueryParams = useMemo(
    () => ({
      part: 'contentDetails,snippet,statistics',
      id,
    }),
    [id]
  );
  const relatedVideosQueryParams = useMemo(
    () => ({
      relatedToVideoId: id,
      part: 'id,snippet',
      type: 'video',
      maxResults: '50',
    }),
    [id]
  );
  const [details] = useYoutubeAPI('/videos', detailsQueryParams);
  const [relatedVideos, relatedVideosIsLoading, relatedVideosError] =
    useYoutubeAPI('/search', relatedVideosQueryParams);
  return (
    <Box pt={2}>
      <Container maxWidth={false}>
        <Stack
          direction={{ lg: 'row' }}
          gap={1}
          alignItems={{ xs: 'center', lg: 'flex-start' }}
          justifyContent="space-around"
        >
          <Box
            flex={0.9}
            width={{ xs: '100%', lg: 'auto' }}
            position={{ xs: 'static', lg: 'sticky' }}
            top="117px"
          >
            <Box>
              <ReactPlayer
                className="react-player"
                width="100%"
                controls
                url={`https://www.youtube.com/watch?v=${id}`}
                fallback={
                  <FidgetSpinner
                    ballColors="red"
                    wrapperStyle={{
                      position: 'absolute',
                      top: '50%',
                      display: 'flex',
                      justifyContent: 'center',
                      width: '100%',
                      transform: 'translateY(-50%)',
                    }}
                  />
                }
              />
              <Typography variant="h5" color="white" my="15px">
                {details?.[0].snippet.title}
              </Typography>
              <Stack
                direction={{ sm: 'row' }}
                gap={2}
                justifyContent="space-between"
              >
                <Stack direction="row" gap={0.5} alignItems="center">
                  <Link to={`/channel/${details?.[0].snippet.channelId}`}>
                    <Typography
                      color="gray"
                      variant="subtitle1"
                      fontWeight="bold"
                    >
                      {details?.[0].snippet.channelTitle}
                    </Typography>
                  </Link>

                  <CheckCircle fontSize="small" sx={{ color: 'white' }} />
                </Stack>
                <Stack
                  direction="row"
                  gap={1.5}
                  justifyContent="center"
                  color="white"
                >
                  <Stack direction="row" gap={0.5}>
                    <Visibility color="info" />
                    <Typography>
                      {parseInt(
                        details?.[0].statistics.viewCount
                      ).toLocaleString()}{' '}
                      views
                    </Typography>
                  </Stack>
                  <Stack direction="row" gap={0.5}>
                    <ThumbUpSharp color="primary" />
                    <Typography>
                      {parseInt(
                        details?.[0].statistics.likeCount
                      ).toLocaleString()}{' '}
                      likes
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
            </Box>
          </Box>
          <Box>
            <Loading
              isLoading={relatedVideosIsLoading}
              error={relatedVideosError}
              spinner={<VideoListSkeleton />}
            >
              <VideosList videos={relatedVideos} />
            </Loading>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
export default VideoPage;
