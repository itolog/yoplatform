import axios from 'axios';
import config from '../config/config.json';

class YoutubeService {
  async search(q: string) {
    try {
      const { data } = await axios({
        url: 'search',
        baseURL: config.youtube_base_url,
        params: {
          part: 'snippet',
          maxResults: 5,
          key: config.youtube_key,
          type: 'video',
          q,
        },
        headers: {
          Accept: 'application/json',
        },
      });

      return {
        data,
        error: null,
      };
    } catch (e) {
      const { error } = e?.response?.data;
      return {
        data: null,
        error: {
          status: error?.code ?? null,
          message: error?.message ?? null,
        },
      };
    }
  }
}

export const youtubeService = new YoutubeService();
