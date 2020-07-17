import { ajax } from 'rxjs/ajax';
import config from '../config/config.json';

class YoutubeService {
  search(q: string) {
    return ajax.getJSON(
      `${config.youtube_base_url}/search?part=snippet&maxResults=5&q=${q}&type=video&key=${config.youtube_key}`,
    );
  }
}

export const youtubeService = new YoutubeService();
