import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import Row from "../row/row";
import classes from './style.module.css';

export default function Rating({ value, maxStar }) {
  let rates = [];
  const stars = [...Array(maxStar || 5).keys()];
  for (let i = 1; i <= value; i = i + 0.5) {
    if (i % 1 !== 0) {
      if (i === value) {
        rates.push(0.5);
      }
    } else {
      rates.push(true);
    }
  }
  return (
    <abbr title={`${String(value)} ${value < 2 ? "Star" : "Stars"} Rating`}>
      <Row>
        {stars.map((item, index) =>
          rates[index] === true ? (
            <StarIcon className={classes.star} />
          ) : rates[index] === 0.5 ? (
            <StarHalfIcon className={classes.star} />
          ) : (
            <StarBorderIcon className={classes.emptystar} />
          )
        )}
      </Row>
    </abbr>
  );
}
