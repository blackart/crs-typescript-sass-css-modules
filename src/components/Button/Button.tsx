import React from 'react';
import * as styles from './Button.scss';
const Button = () => {
    console.debug(styles);
    return (
      <>
          <button
            className={styles.btn}
            // className="btn"
            onClick={() => alert('I am styled with CSS Modules')}
          >
              I am button 2 - Press Me
          </button>
      </>
    );
};
export default Button;