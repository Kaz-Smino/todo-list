export const IncompleteTodos = (props) => {
  const { todos, onClickComplete, onClickDelete } = props;
  return (
    <div className="incomplete-area">
      <p className="title">Incomplete Todos</p>
      <ul>
        {todos.map((todo, index) => (
          <li key={todo} style={{ marginBottom: '-10px' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <p style={{ margin: '6px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '280px' }}>{todo}</p>
              <button style={{ marginRight: '10px' }} onClick={() => onClickComplete(index)}>Done</button>
              <button onClick={() => onClickDelete(index)}>Clear</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
