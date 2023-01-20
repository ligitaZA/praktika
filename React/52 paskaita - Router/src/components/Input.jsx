import './input.css';

const Input = (props) => {
  return (
    <label className="raudonasTekstas">
      {props.text}
      <input type={props.type} placeholder={props.text}/>
    </label>
  );
}

export default Input;