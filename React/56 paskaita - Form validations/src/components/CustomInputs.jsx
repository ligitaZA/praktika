const CustomInput = ({value, handleInputChange, input, error}) => {

  return (
    <div>
      <label>{input.label}
        <input
          type={input.type}
          name={input.name}
          value={value}
          // pattern={pattern}
          required={input.required}
          onChange={(event) => handleInputChange(event)}
        />
        <span>{error && input.error}</span>
      </label>
    </div>
  );
}

export default CustomInput;
