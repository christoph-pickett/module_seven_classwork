import React, { useState } from "react";
import { useFormInput } from "../hooks/useFormInput";

export const SubscribeForm = () => {
  const [status, setStatus] = useState("");
  //STATE VAR
  // similar state variables mapped to form inputs
  const [firstName, resetFirstName] = useFormInput("Mary");
  const [secondName, resetSecondName] = useFormInput("Poppins");
  const [email, resetEmail] = useFormInput("mary@poppins.com");
  const [phone, resetPhone] = useFormInput("0407470689");

  // FUCNTIONS
  // similar handler functions
  const handleNameChange = (e) => firstName.onChange(e);
  const handleSecondNameChange = (e) => secondName.onChange(e);
  const handleEmailChange = (e) => email.onChange(e);
  const handlePhoneChange = (e) => phone.onChange(e);

  function handleSubscribe() {
    resetFirstName();
    resetSecondName();
    resetEmail();
    resetPhone();
    setStatus(
      `Thanks for subscribing, ${firstName.value} ${secondName.value}!`
    );
  }

  // RETURN
  return (
    <div className="SubscribeForm componentBox">
      <label>
        First name: {/* form inputs with similar props */}
        <input value={firstName.value} onChange={handleNameChange} />
      </label>
      <label>
        First name: {/* form inputs with similar props */}
        <input value={secondName.value} onChange={handleSecondNameChange} />
      </label>
      <label>
        Email: {/* form inputs with similar props */}
        <input type="email" value={email.value} onChange={handleEmailChange} />
      </label>
      <label>
        Phone: {/* form inputs with similar props */}
        <input type={"tel"} value={phone.value} onChange={handlePhoneChange} />
      </label>
      <label>
        Phone: {/* form inputs with similar props */}
        <input type={"date"} value={""} onChange={handlePhoneChange} />
      </label>
      <button onClick={handleSubscribe}>Subscribe</button>
      <div>{status}</div>
    </div>
  );
};
