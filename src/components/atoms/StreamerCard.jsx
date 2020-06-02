import React, { useCallback } from "react";
import useLazyFetch from "../../utils/hooks/useLazyFetch";
import { Button } from "react-bootstrap";

const StreamerCard = ({ streamerName }) => {
  const streamerUrl = `https://api.twitch.tv/helix/streams?user_login=${streamerName}`;
  const [fetchStreamer, { loading, data: streamerData }] = useLazyFetch(
    streamerUrl
  );

  const _handleClick = useCallback(() => {
    fetchStreamer();
  }, [fetchStreamer]);

  if (loading) return <p>Loading...</p>;

  return streamerData ? (
    <div className="streamer">
      <a
        href={`http://twitch.tv/${streamerName}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={streamerData.thumbnail_url
            .replace("{width}", "165")
            .replace("{height}", "105")}
          alt="Joueur"
        />
        <p className="user_name">{streamerData.user_name}</p>
        {/* <p>{streamerData.title}</p> */}
        <p className="user_viewer">{streamerData.viewer_count} viewers</p>
        {/* <p>{streamerData.language}</p> */}
      </a>
    </div>
  ) : (
    <div>
      <Button className="button_refresh" onClick={_handleClick}>
        Refresh
      </Button>
      <div>{streamerName} is offline</div>
    </div>
  );
};

export default StreamerCard;
