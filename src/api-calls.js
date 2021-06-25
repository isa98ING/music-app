import qs from "qs";

// Access Token Request
export const authorization = async () => {
  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    body: qs.stringify({
      grant_type: "client_credentials",
    }),
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization:
        "Basic MjlkZDU0NzI3ZDAxNGE2YzhhZTA2NWIwNmNiNDdkY2E6MDExNGU5ODYxNjBiNDNlZWJkMTE1NGVmYTFkNjFjOWM=",
    },
  });
  const data = await response.json();
  let authToken = data["access_token"];
  return authToken;
};

// Playlist Tracks Request
export const api_Music = async (token, playlist_id) => {
  const response = await fetch(
    `https://api.spotify.com/v1/playlists/${playlist_id}/tracks?market=ES&limit=8`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    }
  );

  const data = await response.json();
  const transformedMusic = data.items.map((musicData) => {
    return {
      id: musicData.track.id,
      title: musicData.track.name,
      album: musicData.track.album.name,
      author: musicData.track.artists[0].name,
    };
  });
  return transformedMusic;
};

