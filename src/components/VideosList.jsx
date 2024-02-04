import { List, ListItem } from '@mui/material';
import { VideoCard, ChannelCard } from './';
import { Fragment } from 'react';

function VideosList({ videos }) {
  console.log(videos);
  if (!videos) return <></>;
  return (
    <List sx={{  maxWidth: 420, bgcolor: '#000',}}>
      {videos.map((item, index) => (
        <ListItem key={index}>
          {
            <Fragment key={index}>
              {item.id.videoId && <VideoCard video={item} />}
              {item.id.channelId && <ChannelCard channel={item} />}
            </Fragment>
          }
        </ListItem>
      ))}
    </List>
  );
}
export default VideosList;
/*


Array(50) [
  {
    kind: 'youtube#searchResult',
    id: { kind: 'youtube#video', videoId: 'dxKe3Kc1IgY' },
    snippet: {
      publishedAt: '2023-09-06T04:30:26Z',
      channelId: 'UCJg9wBPyKMNA5sRDnvzmkdg',
      title: 
        'Alex Murdaugh new trial? Legal expert says it&#39;s possible | LiveNOW from FOX',
      description: 
        'Lawyers for Alex Murdaugh requested a new trial, alleging the court clerk tampered with jurors so she could secure a book deal.',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/dxKe3Kc1IgY/default.jpg',
          width: 120,
          height: 90
        },
        medium: {
          url: 'https://i.ytimg.com/vi/dxKe3Kc1IgY/mqdefault.jpg',
          width: 320,
          height: 180
        },
        high: {
          url: 'https://i.ytimg.com/vi/dxKe3Kc1IgY/hqdefault.jpg',
          width: 480,
          height: 360
        }
      },
      channelTitle: 'LiveNOW from FOX',
      liveBroadcastContent: 'none',
      publishTime: '2023-09-06T04:30:26Z'
    }
  },
  {
    kind: 'youtube#searchResult',
    id: { kind: 'youtube#video', videoId: 'p951ocPuJF0' },
    snippet: {
      publishedAt: '2023-09-06T09:00:29Z',
      channelId: 'UC12HMtO5MYph9dCZZ7yygng',
      title: 'XG - NEW DANCE  (Choreography)',
      description: 
        'XG NEW DANCE from XG\'s 1st Mini Album \'NEW DNA\' 2023.08.23 WED Streaming/Download https://XG.lnk.to/NEWDANCE ...',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/p951ocPuJF0/default.jpg',
          width: 120,
          height: 90
        },
        medium: {
          url: 'https://i.ytimg.com/vi/p951ocPuJF0/mqdefault.jpg',
          width: 320,
          height: 180
        },
        high: {
          url: 'https://i.ytimg.com/vi/p951ocPuJF0/hqdefault.jpg',
          width: 480,
          height: 360
        }
      },
      channelTitle: 'XG',
      liveBroadcastContent: 'none',
      publishTime: '2023-09-06T09:00:29Z'
    }
  },
*/
