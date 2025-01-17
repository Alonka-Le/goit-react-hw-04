import css from "./LoadMoreBtn.module.css";

export default function LoadMoreBtn({ onClick }) {
  return (
    <div className={css.container}>
      <button type="button" onClick={onClick} className={css.btn}>
        Load more
      </button>
    </div>
  );
}
