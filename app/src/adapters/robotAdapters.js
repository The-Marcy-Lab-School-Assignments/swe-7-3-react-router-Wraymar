import { handleFetch } from "./handleFetch";

export const getAllRobots = () => {
  return handleFetch('http://localhost:4000/robots');
}

export const getRobotById = (id) => {
  return handleFetch(`http://localhost:4000/robots/${id}`);
}