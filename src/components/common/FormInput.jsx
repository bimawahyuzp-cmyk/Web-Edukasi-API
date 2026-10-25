import "./FormInput.css";

/**
 * FormInput reusable.
 * Props:
 *  - label: teks label di atas input
 *  - id: id/name untuk input & htmlFor label
 *  - type: tipe input (text, email, tel, password, dst)
 *  - placeholder
 *  - value, onChange: untuk controlled input
 */
function FormInput({ label, id, type = "text", placeholder, value, onChange }) {
  return (
    <div className="form-input">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default FormInput;
