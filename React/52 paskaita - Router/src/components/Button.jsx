import moduleStyles from './button.module.css';

const Button = (props) => {
  return (
    <button className={moduleStyles.raudonasTekstas} id={moduleStyles.button}>
      {props.text}
    </button>
  );
}

export default Button;