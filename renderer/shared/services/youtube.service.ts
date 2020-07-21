import { ajax } from 'rxjs/ajax';
import config from '../config/config.json';

class YoutubeService {
  private resultsQt = 10;
  search(q: string) {
    return ajax.getJSON(
      `${config.youtube_base_url}/search?part=snippet&maxResults=${this.resultsQt}&q=${q}&type=video&key=${config.youtube_key}`,
    );
  }
}

export const youtubeService = new YoutubeService();
