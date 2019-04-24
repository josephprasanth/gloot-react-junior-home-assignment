import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

import { getGames, deleteGame, addGame, editGame } from "./game-service";
import NewGameForm from "./components/NewGameForm";
import GameList from "./components/GameList";
import EditGameForm from "./components/EditGameForm";

class App extends React.Component {
  state = {
    games: [],
    newGame: {
      name: ""
    },
    gameForUpdate: undefined,
    // Do we need to get games from back-end ?
    needGames: false
  };
  componentDidUpdate = async () => {
    if (this.state.needGames) {
      const games = await getGames();
      this.setState(state => {
        state.games = games;
        state.needGames = false;
        return state;
      });
    }
  };
  componentDidMount = async () => {
    const games = await getGames();
    this.setState(state => {
      state.games = games;
      return state;
    });
  };

  // Gamelist api
  onDeleteClick = async id => {
    await deleteGame(id);
    this.setState({
      needGames: true
    });
  };
  onEditClick = async id => {
    const { games } = this.state;
    let gamesWithId = games.filter(g => g.id === id);
    if (gamesWithId.length < 1) {
      alert("something went wrong!");
      return false;
    }
    this.setState(state => {
      state.gameForUpdate = gamesWithId[0];
      state.needGames = true;
      return state;
    });
  };

  // Newgame api
  onNewGameChange = e => {
    const value = e.target.value;
    this.setState(state => {
      state.newGame.name = value;
      return state;
    });
  };
  onNewGameSubmit = async () => {
    const { newGame } = this.state;
    await addGame(newGame);
    this.setState(state => {
      state.newGame.name = "";
      state.needGames = true;
      return state;
    });
  };

  // Updategame api
  onEditGameChange = e => {
    const value = e.target.value;
    this.setState(state => {
      state.gameForUpdate.name = value;
      return state;
    });
  };
  onEditGameCancel = () => {
    this.setState(state => {
      state.gameForUpdate = undefined;
      return state;
    });
  };
  onEditGameSubmit = async () => {
    const { gameForUpdate } = this.state;
    await editGame(gameForUpdate);
    this.setState(state => {
      state.gameForUpdate = undefined;
      state.needGames = true;
      return state;
    });
  };

  render() {
    const { games, newGame, gameForUpdate } = this.state;
    return (
      <div>
        <h1 className="title">Game Library</h1>
        {games && (
          <GameList
            onDeleteClick={this.onDeleteClick}
            onEditClick={this.onEditClick}
            games={games}
          />
        )}
        {gameForUpdate && (
          <EditGameForm
            game={gameForUpdate}
            onChange={this.onEditGameChange}
            onCancel={this.onEditGameCancel}
            onSubmit={this.onEditGameSubmit}
          />
        )}
        <br />
        <NewGameForm
          game={newGame}
          onChange={this.onNewGameChange}
          onSubmit={this.onNewGameSubmit}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app-container"));
