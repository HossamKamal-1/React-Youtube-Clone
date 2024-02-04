import { Box } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components';
import FeedPage from './pages/FeedPage';
import { Suspense, lazy } from 'react';
import { ThreeDots } from 'react-loader-spinner';
const lazyImport = (path) => {
  return import(/* webpackChunkName: "[request]" */ `${path}`);
};
const ChannelPage = lazy(() => lazyImport('./pages/ChannelPage'));
const NotFoundPage = lazy(() => lazyImport('./pages/NotFoundPage'));
const SearchResultPage = lazy(() => lazyImport('./pages/SearchResultPage'));
const VideoPage = lazy(() => lazyImport('./pages/VideoPage'));

function App() {
  console.log('app re-rendered');
  const spinner = (
    <ThreeDots
      height="80"
      width="80"
      radius="9"
      color="red"
      ariaLabel="three-dots-loading"
      wrapperStyle={{ justifyContent: 'center' }}
    />
  );
  return (
    <Box minHeight="100vh" bgcolor="#000">
      <Navbar />
      <Routes>
        <Route path="/" element={<FeedPage />} />
        <Route
          path="/channel/:id"
          element={
            <Suspense fallback={spinner}>
              <ChannelPage />
            </Suspense>
          }
        />
        <Route
          path="/video/:id"
          element={
            <Suspense fallback={spinner}>
              <VideoPage />
            </Suspense>
          }
        />
        <Route
          path="/search"
          element={
            <Suspense fallback={spinner}>
              <SearchResultPage />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={spinner}>
              <NotFoundPage />
            </Suspense>
          }
        />
      </Routes>
    </Box>
  );
}
export default App;
