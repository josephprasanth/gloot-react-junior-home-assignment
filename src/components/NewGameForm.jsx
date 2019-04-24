import React from "react";

const NewGameForm = props => {
  const { game, onChange, onSubmit } = props;
  return (
    <div className="new-game-form">
      <div className="field">
        <div className="control">
          <input
            className="input"
            value={game.name}
            onChange={onChange}
            placeholder="game name"
          />
        </div>
      </div>
      <div className="field">
        <div className="control">
          <button className="button" onClick={onSubmit}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewGameForm;