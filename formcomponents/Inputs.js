import InputsCSS from "/formcomponents/Inputs.css";

export default function Inputs() {
  return (
    <div
      className="row text-white justify-content-center mx-auto h5"
      style={InputsCSS}
    >
      <div className="row pl-3 pr-3 pt-3">
        <label for="username">Nume Utilizator</label>
        <input
          type="text"
          placeholder="ex: naturelover271"
          name="username"
          className="p-2"
          required
        />
      </div>
      <div className="row pl-3 pr-3 pt-3">
        <label for="password">Parolă</label>
        <input
          type="password"
          placeholder="********"
          name="password"
          className="p-2"
          required
        />
      </div>
    </div>
  );
}
