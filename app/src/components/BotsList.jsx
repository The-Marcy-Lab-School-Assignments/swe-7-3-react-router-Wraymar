import BotCard from "./BotCard";

import { useState, useEffect } from "react";
import { getAllRobots } from "../adapters/robotAdapters";
import CouldNotLoadData from "./CouldNotLoadData";

const BotsList = ({ botTypeFilter }) => {
  //from the tuple returned by handleFetch, we manage the state of responseData and error
  const [robots, setRobots] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRobots = async () => {
      const [data, error] = await getAllRobots();
      if (data) setRobots(data);
      if (error) setError(error);
    };
    fetchRobots();
  }, []);

  if (error || !robots) return <CouldNotLoadData />;

  // a robot passes the filter if:
  // - the robot class matches the filter
  // - there is no filter set
  const isInFilter = (robot) =>
    robot.bot_class === botTypeFilter || botTypeFilter === "";
  const robotToBotCard = (robot) => {
    return <BotCard key={robot.id} robot={robot} />;
  };

  return (
    <div className="ui centered cards">
      {robots?.filter(isInFilter).map(robotToBotCard)}
    </div>
  );
};

export default BotsList;
