import { Box, Container, Stack, Typography } from '@mui/material';
import { useMemo, useState } from 'react';
import { Loading, Sidebar, VideosGrid } from '../components';
import { InfinitySpin } from 'react-loader-spinner';
import useYoutubeAPI from '../utils/useYoutubeAPI';
function FeedPage() {
  const [selectedCategory, setSelectedCategory] = useState('New');
  const queryParams = useMemo(
    () => ({
      q: selectedCategory,
      maxResults: '50',
      part: 'snippet,id',
      regionCode: 'US',
    }),
    [selectedCategory]
  );
  const [videos, isLoading, error] = useYoutubeAPI('/search', queryParams);
  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName);
  };
  return (
    <Box>
      <Stack direction={{ md: 'row' }}>
        <Stack
          borderRight={{ xs: 'none', md: '1px solid #3d3d3d' }}
          borderBottom={{ xs: '1px solid #3d3d3d', md: 'none' }}
          bgcolor="black"
          height={{ xs: 'auto', md: 'calc(100vh - 101px)' }}
          position="sticky"
          top="101px"
        >
          <Sidebar
            handleCategoryClick={handleCategoryClick}
            selectedCategory={selectedCategory}
          />
          <Typography
            variant="body2"
            color="#FFF"
            display={{ xs: 'none', md: 'block' }}
            py={2}
            textAlign="center"
          >
            Copyrights reserved 2023 &copy;
          </Typography>
        </Stack>
        <Box flex="1" color="white">
          <Container maxWidth={false}>
            <Typography
              variant="h4"
              fontWeight="bold"
              bgcolor="black"
              position="sticky"
              top={{ xs: '177.4px', md: '101px' }}
            >
              {selectedCategory}{' '}
              <Typography
                fontSize="inherit"
                fontWeight="inherit"
                component="span"
                color="error.main"
              >
                Videos
              </Typography>
            </Typography>
            <Loading
              error={error}
              isLoading={isLoading}
              spinner={
                <Stack
                  minHeight={{
                    xs: 'calc(100vh - 101px - 51px - 76.1px)',
                    md: 'calc(100vh - 101px - 51px)',
                  }}
                  alignItems="center"
                  justifyContent="center"
                >
                  <InfinitySpin color="red" />
                </Stack>
              }
            >
              <VideosGrid videos={videos} />
            </Loading>
          </Container>
        </Box>
      </Stack>
    </Box>
  );
}
export default FeedPage;
