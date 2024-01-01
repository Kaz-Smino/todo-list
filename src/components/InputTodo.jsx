export const InputTodo = (props) => {
  const { todoText, onChange, onClick, disabled } = props;
  return (
    <div className="input">
      <input
        className="input-area" 
        disabled={disabled}
        placeholder="Enter Todo"
        value={todoText}
        onChange={onChange}
      />
      <button disabled={disabled} onClick={onClick}>
        ＋
      </button>
    </div>
  );
};