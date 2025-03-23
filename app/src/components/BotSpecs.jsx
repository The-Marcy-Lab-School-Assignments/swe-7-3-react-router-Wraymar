// This component is shown at /robots/${id}
// TODO:
// 1. pull the id value from the URL
// 2. make state for fetching the robot (and the error)
// 3. use the getRobotById adapter in useEffect, re-fetching each time the id changes
// 4. Update the rendered component to include the fetched robot's data
//     - img alt
//     - img src
//     - name
//     - catchphrase
//     - robot class ("Assault", "Defender", or "Support")
//     - robot class Icon
//     - health
//     - damage
//     - armor
// 5. if an error occurs, render <CouldNotLoadData /> instead
// 6. if no robot is found, render <NotFoundPage /> instead

import NotFoundPage from "../pages/NotFoundPage";
import CouldNotLoadData from "./CouldNotLoadData";
import BotClassIcon from "./BotClassIcon";
import { getRobotById } from "../adapters/robotAdapters";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const BotSpecs = () => {
  //get the id from the URL
  //use params allows you to access dynamic URL parameters, in this case, the id
  const { id } = useParams();

  //make state for fetching the robot and handling errors
  const [robot, setRobot] = useState(null);
  const [error, setError] = useState("");

  //use the getRobotById adapter in useEffect, re-fetching each time the id changes and upon initial render
  useEffect(() => {
    const fetchRobot = async () => {
      const [data, error] = await getRobotById(id);
      if (data) {
        setRobot(data);
      } else {
        setError(error);
      }
    };
    fetchRobot();
    //the dependency array is what useEffect uses to determine when to re-run the effect
    //the id is a dependency of the useEffect hook, it will re-fetch the robot each time the id changes
  }, [id]);

  //if an error occurs, render <CouldNotLoadData /> instead of the return on line 55
  if (error) return <CouldNotLoadData />;
  //if no robot is found, render <NotFoundPage /> instead of line 55
  if (!robot) return <NotFoundPage />;

  return (
    <div className="ui segment">
      <div className="ui two column centered grid">
        <div className="row">
          <div className="four wide column">
            <img
              alt={robot.name}
              className="ui medium circular image bordered"
              src={robot.avatar_url}
            />
          </div>
          <div className="four wide column">
            <h2>Name: {robot.name}</h2>
            <p>
              <strong>Catchphrase: </strong>
              {robot.catchphrase}
            </p>
            <strong>
              Class: {robot.bot_class} {BotClassIcon(robot.bot_class)}
            </strong>
            <br />
            <div className="ui segment">
              <div className="ui three column centered grid">
                <div className="row">
                  <div className="column">
                    <i className="icon large circular red heartbeat" />
                    <strong>Robot Health</strong>
                  </div>
                  <div className="column">
                    <i className="icon large circular yellow lightning" />
                    <strong>Robot Damage</strong>
                  </div>
                  <div className="column">
                    <i className="icon large circular blue shield" />
                    <strong>Robot Armor</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BotSpecs;
