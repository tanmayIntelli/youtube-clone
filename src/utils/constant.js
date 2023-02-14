export const YOUTUBE_API_KEY = "AIzaSyBBVS9NJCNWDkFgdC2Izo7d3U2NKwHVo3o";

export const YOUTUBE_VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=30&regionCode=IN&key=" +
  YOUTUBE_API_KEY;

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_VIDEO_DETAILS = (searchString) =>
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&myRatings=likes&id=" +
  searchString +
  "&key=" +
  YOUTUBE_API_KEY;
