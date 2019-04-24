import axios from "axios";
/**
 * This file handles all the communication with the server.
 * The different endpoints are described in server.js.
 */
const apiUrl = "http://localhost:3000";

export async function getGames() {
  const resp = await fetch(`${apiUrl}/game`);
  return await resp.json();
}

export async function deleteGame(gameId) {
  const resp = await fetch(`${apiUrl}/game/${gameId}`, { method: "DELETE" });
  return await resp.json();
}

export async function addGame(newGame) {
  return await axios.post(`${apiUrl}/game`, newGame);
}

export async function editGame(game) {
  return await axios.put(`${apiUrl}/game/${game.id}`, game);
}
