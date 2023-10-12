import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ handleAddFeedback }) => {
  return (
    <div>
      <ul className={css.list}>
        <li className={css.items}>
          <button
            className={css.buttons}
            type="button"
            onClick={() => handleAddFeedback('good')}
          >
            Good
          </button>
        </li>
        <li className={css.items}>
          <button
            className={css.buttons}
            type="button"
            onClick={() => handleAddFeedback('neutral')}
          >
            Neutral
          </button>
        </li>
        <li className={css.items}>
          <button
            className={css.buttons}
            type="button"
            onClick={() => handleAddFeedback('bad')}
          >
            Bad
          </button>
        </li>
      </ul>
    </div>
  );
};
