import React from "react";

const EditGameForm = props => {
  const { game, onChange, onSubmit, onCancel } = props;
  return (
    <div className="card has-background-light edit-game-form">
      <div className="field">
        <div className="control">
          <input className="input" value={game.name} onChange={onChange} />
        </div>
      </div>
      <div className="field">
        <div className="control">
          <button className="button is-primary is-small" onClick={onSubmit}>
            Update
          </button>
          &nbsp;
          <button className="button is-danger is-small" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditGameForm;