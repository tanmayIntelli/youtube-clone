const YOUTUBE_API_KEY = "AIzaSyBBVS9NJCNWDkFgdC2Izo7d3U2NKwHVo3o";

export const YOUTUBE_VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=30&regionCode=IN&key=" +
  YOUTUBE_API_KEY;
