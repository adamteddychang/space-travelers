const missionURL = "https://api.spacexdata.com/v3/missions";

export const fetchMissions  = async () => {
  const request = await fetch(missionURL);
  const missions = await request.json();
  return missions;
}

export default {fetchMissions};
