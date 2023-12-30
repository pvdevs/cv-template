import './formGroup.scss';

/* eslint-disable react/prop-types */
export default function FormGroup({
  element,
  title,
  id,
  value,
  placeholder,
  type = 'text',
}) {
  if (element === 'input') {
    return (
      <div className="form-group">
        <label htmlFor={id}>{title}</label>
        <input type={type} id={id} value={value} placeholder={placeholder} />
      </div>
    );
  }

  if (element === 'textarea') {
    return (
      <div className="form-group">
        <label htmlFor={id}>{title}</label>
        <textarea
          cols="30"
          rows="5"
          id={id}
          value={value}
          placeholder={placeholder}
        >
          {value}
        </textarea>
      </div>
    );
  }
}
