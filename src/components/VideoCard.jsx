import { Card, CardMedia, CardContent, Typography, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import { CheckCircle } from '@mui/icons-material';
function VideoCard({ video }) {
  return (
    <Card sx={{ bgcolor: '#101418', width: '100%' }}>
      <Link to={`/video/${video.id.videoId}`}>
        <CardMedia
          component="img"
          height={
            video.snippet.thumbnails.medium?.height ||
            video.snippet.thumbnails.default.height
          }
          image={
            video.snippet.thumbnails.medium?.url ||
            video.snippet.thumbnails.default.url
          }
          title={video.snippet.title}
          loading="lazy"
        />
      </Link>
      <CardContent>
        <Link to={`/video/${video.id.videoId}`}>
          <Typography
            gutterBottom
            variant="subtitle1"
            component="h1"
            sx={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: '2',
              WebkitBoxOrient: 'vertical',
              color: '#FFF',
            }}
            title={video.snippet.title}
          >
            {video.snippet.title}
          </Typography>
        </Link>
        <Stack
          alignItems="center"
          gap={0.5}
          direction="row"
          color="rgb(255 255 255 / 55%)"
        >
          <Link
            to={`/channel/${video.snippet.channelId}`}
            style={{ color: 'inherit' }}
          >
            <Typography variant="subtitle2">
              {video.snippet.channelTitle}
            </Typography>
          </Link>
          <CheckCircle fontSize="13px" />
        </Stack>
      </CardContent>
    </Card>
  );
}
export default VideoCard;
