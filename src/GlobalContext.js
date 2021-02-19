import React from 'react';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [token, setToken] = React.useState(null);
  const [tracks, setTracks] = React.useState([]);
  const [currentTrack, setCurrentTrack] = React.useState(null);
  const [user, setUser] = React.useState(null);

  const [percentage, setPercentage] = React.useState(0);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [duration, setDuration] = React.useState(0);
  const [currentTime, setCurrentTime] = React.useState(0);

  const audioRef = React.useRef();

  // Token de acesso a api
  React.useEffect(() => {
    const getHashParams = () => {
      var hashParams = {};
      var e,
        r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
      e = r.exec(q);
      while (e) {
        hashParams[e[1]] = decodeURIComponent(e[2]);
        e = r.exec(q);
      }
      return hashParams;
    };

    let parametros = getHashParams();
    setToken(parametros.access_token);
  }, []);

  // api de dados - musicas
  React.useEffect(() => {
    const loadSaMusic = () => {
      let url =
        'https://api.spotify.com/v1/playlists/5zRo83eDlW4qkuKFNucYih/tracks?market=BR&fields=items(track(name%2Cduration_ms%2Cid%2Cpreview_url%2Calbum(artists%2Cimages)))&limit=20';

      const options = {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      fetch(url, options)
        .then((response) => response.json())
        .then((data) => {
          try {
            setTracks(data.items);
            setCurrentTrack(data.items[0]);
          } catch (error) {
            console.log(error);
          }
        });
    };

    loadSaMusic();
  }, [token]);

  // api de dados do usuario
  React.useEffect(() => {
    const getUser = () => {
      let url = 'https://api.spotify.com/v1/users/{userId}';
      const options = {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      fetch(url, options)
        .then((response) => response.json())
        .then((data) => {
          setUser(data);
        });
    };

    getUser();
  }, [token]);

  React.useEffect(() => {
    function update() {
      const audio = audioRef.current;
      audio.volume = 0.1;

      if (currentTrack) audio.src = currentTrack.track.preview_url;
    }
    update();
  }, [currentTrack]);

  const play = () => {
    const audio = audioRef.current;
    setIsPlaying(true);
    audio.play();
  };

  const pause = () => {
    const audio = audioRef.current;
    setIsPlaying(false);
    audio.pause();
  };

  React.useEffect(() => {
    function togglePlayPause() {
      if (isPlaying) {
        play();
      } else {
        pause();
      }
    }
    togglePlayPause();
  }, [isPlaying, currentTrack]);

  return (
    <GlobalContext.Provider
      value={{
        user,
        token,
        tracks,
        audioRef,
        duration,
        isPlaying,
        percentage,
        currentTime,
        currentTrack,

        play,
        pause,
        setToken,
        setTracks,
        setDuration,
        setIsPlaying,
        setPercentage,
        setCurrentTime,
        setCurrentTrack,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
