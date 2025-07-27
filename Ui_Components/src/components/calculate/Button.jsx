
const Button = ({ label, inputNum }) => {
  function handelChange(label) {
    return ()=>{inputNum(label)}
  }

  return (
          <button
            onClick={handelChange(label)}
            style={{ padding: "5px", margin: "5px" }}
          >
            {label}
          </button>
  );
};

export default Button;
