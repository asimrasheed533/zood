import { memo } from "react";

function ContactInput({ textarea, required, label, error, list, ...props }) {
  return (
    <div className="contact__content__left__input">
      <label
        htmlFor={props.id}
        className="contact__content__left__input__label"
      >
        {label}
        {required ? <span>*</span> : null}
      </label>
      {textarea ? (
        <textarea
          {...props}
          cols="30"
          rows="10"
          className="contact__content__left__input__field"
          required={required}
          style={{ padding: "1em" }}
        />
      ) : (
        <input
          {...props}
          className="contact__content__left__input__field"
          required={required}
          list={`${label}s`}
          id={label}
        />
      )}
      {error === "" ? null : (
        <div className="contact__content__left__input__error">{error}</div>
      )}
      {list ? (
        <datalist id={`${label}s`}>
          {list?.map((item, i) => (
            <option key={i} value={item} />
          ))}
        </datalist>
      ) : null}
    </div>
  );
}

export default memo(ContactInput);
