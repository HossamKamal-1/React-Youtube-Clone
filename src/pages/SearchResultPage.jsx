import { useSearchParams } from 'react-router-dom';
import useYoutubeAPI from '../utils/useYoutubeAPI';
import { useMemo } from 'react';
import { Box, Container, Stack, Typography } from '@mui/material';
import { Loading, VideoListSkeleton, VideosList } from '../components';
function SearchResultPage() {
  const [urlSearchParams] = useSearchParams();
  const searchQuery = urlSearchParams.get('q');
  const queryParams = useMemo(
    () => ({
      q: searchQuery,
      part: 'snippet,id',
      maxResults: '50',
    }),
    [searchQuery]
  );
  const [videos, isLoading, error] = useYoutubeAPI('/search', queryParams);
  console.log('search params', queryParams);
  return (
    <Box>
      <Container maxWidth={false}>
        <Loading
          isLoading={isLoading}
          error={error}
          spinner={<VideoListSkeleton sx={{ alignItems: 'center' }} />}
        >
          <Box>
            <Typography
              variant="h4"
              color="#FFF"
              position="sticky"
              top="101px"
              zIndex="10"
              bgcolor="#000"
            >
              Search Results for{' '}
              <span style={{ color: 'red' }}> {searchQuery} </span>
            </Typography>
            <Stack justifyContent="center" direction="row">
              <VideosList videos={videos} />
            </Stack>
          </Box>
        </Loading>
      </Container>
    </Box>
  );
}
export default SearchResultPage;
