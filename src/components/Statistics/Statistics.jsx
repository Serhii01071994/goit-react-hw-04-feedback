import css from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      <ul className={css.statistics}>
        <li className={css.items}>
          <p>Good</p>
          <span className={css.results}>{good}</span>
        </li>
        <li className={css.items}>
          <p>Neutral</p>
          <span className={css.results}>{neutral}</span>
        </li>
        <li className={css.items}>
          <p>Bad</p>
          <span className={css.results}>{bad}</span>
        </li>
        <li className={css.items}>
          <p>Total</p>
          <span className={css.results}>{total}</span>
        </li>
        <li className={css.items}>
          <p>Positive feedback:</p>
          <span className={css.results}>{positivePercentage}%</span>
        </li>
      </ul>
    </div>
  );
};
