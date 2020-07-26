import axios from "axios";

const api = axios.create({
  headers: {
    "Client-ID": process.env.REACT_APP_CLIENT,
    Authorization: process.env.REACT_APP_AUTH,
  },

  /* 
  
  CLIENT_ID = 'VOTRE_CLIENT_ID';
    REDIRECT = 'http://127.0.0.1/';

    LIEN AUTH = https://id.twitch.tv/oauth2/authorize?client_id=09rw4ripqpc37i886p0qo3sk6i00q7&redirect_uri=http://127.0.0.1/&response_type=token

  */
});

export default api;
