import { useState } from "react";

export default function PasswordField() {
  // const strengthLabels = ["weak", "medium", "strong"];
  // const [strength, setStrength] = useState("");
  const [upperCase, setUpperCase] = useState("");
  const [lowerCase, setLowerCase] = useState("");
  const [minLength, setMinLength] = useState("");
  const [number, setNumber] = useState("");
  const [symbol, setSysmbol] = useState("");
  const [showPass, setShowPass] = useState(false);

  const handleChange = (event) => {
    const password = event.target.value;
    setMinLength(password.length >= 8 ? "OK" : "");
    setUpperCase(/[A-Z]/.test(password) ? "OK" : "");
    setLowerCase(/[a-z]/.test(password) ? "OK" : "");
    setNumber(/[0-9]/.test(password) ? "OK" : "");
    setSysmbol(/[^a-zA-Z0-9]/.test(password) ? "OK" : "");
  };

  return (
    <div className="container">
      <div className="input">
        <input
          name="password"
          spellCheck="false"
          className="control"
          type={showPass ? "text" : "password"}
          placeholder="Masukan kata sandi"
          onChange={handleChange}
        />
        <br></br>
        <button onClick={() => setShowPass(!showPass)}>show password</button>
      </div>
      <div className="indicator">
        {/* <div className="strength">{strength && `${strength} password`}</div>
        <div className={`bars ${strength}`}>
          <div></div>
        </div> */}
        <ul>
          <li>
            Minimal 8 karakter{" "}
            <span style={{ color: "green" }}>{minLength}</span>
          </li>
          <li>
            Huruf kapital <span style={{ color: "green" }}>{upperCase}</span>
          </li>
          <li>
            Huruf kecil <span style={{ color: "green" }}>{lowerCase}</span>
          </li>
          <li>
            Angka <span style={{ color: "green" }}>{number}</span>
          </li>
          <li>
            Simbol <span style={{ color: "green" }}>{symbol}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
