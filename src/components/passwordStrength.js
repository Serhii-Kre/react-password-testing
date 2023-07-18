import './passwordStrength.css'

let bar0, bar1, bar2 = 'gray';

const PasswordStrength = ({strength}) => {
    const colorPassword = strength => {
        switch (strength) {
          case 'empty':
            bar0 = bar1 = bar2 = 'gray'
            break;
          case 'short':
            bar0 = bar1 = bar2 = 'red'
            break;
          case 'easy':
            bar0 = 'red';
            bar1 = 'gray';
            bar2 = 'gray';
            break;
          case 'medium':
            bar0 = 'yellow';
            bar1 = 'yellow';
            bar2 = 'gray';
            break;
          case 'strong':
            bar0 = 'green';
            bar1 = 'green';
            bar2 = 'green';
            break
          default:
            bar0 = bar1 = bar2 = 'gray'
        }
    };
    colorPassword(strength);
    
   return (
     
       <div className="strength">
           <ul className="strengthBar">
               <li className={`bar ${bar0}`}></li>
               <li className={`bar ${bar1}`}></li>
               <li className={`bar ${bar2}`}></li>
           </ul>
       </div>
   )   
}

export default PasswordStrength;