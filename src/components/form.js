import React, { useState } from "react";
import './form.css'
import PasswordStrength from './passwordStrength'
const Form = () => { 
  
  const [strength, initStrength] = useState();

  const checkPassword = value => {
    const regex = /[$-/:-?{-~!"^_@`\[\]]/g;

    if(value === '') return 'empty';
    if(value.length < 8) return 'short';

    const letters = /[a-zA-Z]+/.test(value);
    const numbers = /[0-9]+/.test(value);
    const symbols = regex.test(value);

    //Has letters, symbols and numbers - the password is strong;
    if(letters && numbers && symbols) return 'strong';
    // letters-symbols/letters-digits/digits-symbols
    if((letters && symbols) || (letters && numbers) || (numbers && symbols)) return 'medium';
    // Only letters/digits/symbols - the password is easy
    if(letters || numbers || symbols) return 'easy';
 
    return ''
  }

  const onChange = (e) => {
    initStrength(checkPassword(e.target.value));
  }
  return (
      <div className="container">
          <div>
              <div className="title">
                  Lets try typing :-)
              </div>
              <form>
                  <input
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Password"
                      onChange={onChange}
                      required
                  />
                  <PasswordStrength strength={strength} />                 
              </form>
              <div className="footer">
                  Thank you!
              </div>
          </div>
      </div>
  );
  
};
export default Form;