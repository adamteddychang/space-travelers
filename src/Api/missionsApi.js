const missionURL = 'https://api.spacexdata.com/v3/missions';

export const fetchMissionsApi = async () => {
  const request = await fetch(missionURL);
  const missions = await request.json();
  return missions;
};

export default { fetchMissionsApi };
