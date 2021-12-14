




function Mission(props) {
const {mission} = props;
return (
<tr key={mission.mission_id}>
  <td>{mission.mission_name}</td>
  <td>{mission.description}</td>
  <td>Active</td>
  <td>Join</td>
</tr>
)
}

export default Mission;