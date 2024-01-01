import React from 'react';

export const CompleteTodos = (props) => {
  const { todos, onClickBack } = props;
  return (
    <div className="complete-area">
      <p className="title">Completed Todos</p>
      <ul>
        {todos.map((todo, index) => (
          <li key={todo} style={{ marginBottom: '-10px' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <p style={{ margin: '6px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '327px' }}>{todo}</p>
              <button onClick={() => onClickBack(index)}>Undo</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
