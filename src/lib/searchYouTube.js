import { API_KEY, YOUTUBE_API_KEY } from '../config/config.js';

$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', API_KEY);
});


var searchYouTube = function(query, callback) {
  $.get('https://app-hrsei-api.herokuapp.com/api/recastly/videos', {q: query, key: YOUTUBE_API_KEY, maxResults: 5})
  .done((data) => {
    if (callback) {
      callback(data);
    }
  })
  .fail(() => {
    console.error(`Can't get videos`);
  })
}

export default searchYouTube;