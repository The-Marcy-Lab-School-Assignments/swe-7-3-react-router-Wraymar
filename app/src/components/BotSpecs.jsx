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

import NotFoundPage from '../pages/NotFoundPage';
import CouldNotLoadData from './CouldNotLoadData';
import BotClassIcon from './BotClassIcon';
import { getRobotById } from '../adapters/robotAdapters';
import { useState, useEffect } from 'react';

const BotSpecs = () => {

  return (
    <div className="ui segment">
      <div className="ui two column centered grid">
        <div className="row">
          <div className="four wide column">
            <img
              alt="Robot Name"
              className="ui medium circular image bordered"
              src="Robot Avatar"
            />
          </div>
          <div className="four wide column">
            <h2>Name: Robot Name</h2>
            <p>
              <strong>Catchphrase: </strong>
              Robot Catchphrase
            </p>
            <strong>
              Class: Assault {BotClassIcon("Assault")}
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
  )
}

export default BotSpecs;
