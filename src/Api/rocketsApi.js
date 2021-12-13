const ROCKETSURL = 'https://api.spacexdata.com/v3/rockets';

export const fetchRocketsApi = async () => {
  const req = await fetch(ROCKETSURL);
  const rockets = await req.json();
  return rockets;
};