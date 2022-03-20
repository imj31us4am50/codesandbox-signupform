import CheckboxCSS from "/formcomponents/Checkbox.css";

export default function Checkbox() {
  return (
    <div className="row pl-3 pr-3 pt-3 mx-auto text-white" style={CheckboxCSS}>
      <label for="checkbox">
        <input type="checkbox" name="checkbox" className="m-2" required />
        Am citit și sunt de acord cu <a href="#">Termenii și Condițiile</a>
      </label>
    </div>
  );
}
