import React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import LaunchItem from "./LaunchItem";

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_success
      launch_date_local
    }
  }
`;

function Launches(props) {
  const { loading, error, data } = useQuery(LAUNCHES_QUERY);

  if (loading) return <h4>Loading...</h4>;
  if (error) console.log(error);

  return (
    <div>
      <h1 className="display-4 my-3">Launches</h1>
      {data.launches.slice(0, 10).map((launch) => (
        <LaunchItem key={launch.flight_number} launch={launch} />
      ))}
    </div>
  );
}

export default Launches;
