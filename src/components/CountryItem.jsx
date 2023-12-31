import flagEmojiToPNG from "../utils/FlagEmojiToPNG";
import styles from "./CountryItem.module.css";
import PropTypes from "prop-types";

CountryItem.propTypes = {
  country: PropTypes.any.isRequired,
};

function CountryItem({ country }) {
  return (
    <li className={styles.countryItem}>
      <span>{flagEmojiToPNG(country.emoji)}</span>
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
