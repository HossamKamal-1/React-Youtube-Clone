import { CheckCircle } from '@mui/icons-material';
import { Box, Stack, Typography } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
function ChannelCard({ channel, sx }) {
  const { pathname } = useLocation();
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      gap={2}
      mb={1}
      sx={sx}
      width="100%"
    >
      {pathname.includes('channel') ? (
        <img
          src={channel.snippet.thumbnails.high.url}
          alt="channel"
          style={{
            borderRadius: '50%',
            height: '100px',
            width: '100px',
            backgroundColor: 'gray',
          }}
        />
      ) : (
        <Link to={`/channel/${channel.id.channelId}`}>
          <img
            src={channel.snippet.thumbnails.high.url}
            alt="channel"
            style={{ borderRadius: '50%', height: '100px', width: '100px' }}
            loading="lazy"
          />
        </Link>
      )}
      <Box>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          gap={0.5}
          color="rgb(255 255 255 / 55%)"
        >
          {pathname.includes('channel') ? (
            <Typography>
              {channel.snippet?.channelTitle || channel.snippet.title}
            </Typography>
          ) : (
            <Link
              to={`/channel/${channel.id.channelId}`}
              style={{ color: 'inherit' }}
            >
              <Typography>
                {channel.snippet?.channelTitle || channel.snippet.title}
              </Typography>
            </Link>
          )}
          <CheckCircle fontSize="14" />
        </Stack>
        {channel.statistics?.hiddenSubscriberCount === false ? (
          <Typography color="gray" variant="subtitle2" textAlign="center">
            {parseInt(channel.statistics.subscriberCount).toLocaleString()}{' '}
            Subscribers
          </Typography>
        ) : null}
      </Box>
    </Stack>
  );
}
export default ChannelCard;
