// Interface
import {IButtons} from '../../interfaces/IButton';

// Styles

import './Button.css';

function Button({buttonClass, ButtonText, handleClick}: IButtons) {
	return (
		<button value={ButtonText} className={buttonClass} onClick={e => handleClick(e)}>
			{ButtonText}
		</button>
	);
}

export default Button;
