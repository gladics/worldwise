import styles from "./Button.module.css";
import PropTypes from "prop-types";

Button.propTypes = {
  children: PropTypes.any.isRequired,
  onClick: PropTypes.any.isRequired,
  type: PropTypes.any.isRequired,
};

function Button({ children, onClick, type }) {
  return (
    <button className={`${styles.btn} ${styles[type]}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
