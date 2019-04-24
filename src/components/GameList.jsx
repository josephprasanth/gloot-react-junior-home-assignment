import React from "react";

const GameList = props => {
  const { games, onDeleteClick, onEditClick } = props;
  return (
    <div className="list">
      {games.map(game => (
        <div className="list-item" key={game.id}>
          <div className="columns">
            <div className="column is-8">
              <label>{game.name}</label>
            </div>
            <div className="column is-4">
              <button
                className="button is-primary is-small"
                onClick={onEditClick.bind(null, game.id)}
              >
                Edit
              </button>
              &nbsp;
              <button
                className="button is-danger is-small"
                onClick={onDeleteClick.bind(null, game.id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GameList;
