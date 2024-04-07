import { buttonTypes } from '../buttonTypes';
import styles from './RoundedButton.module.scss';

const RoundedButton = ({text = "NONE", buttonType = buttonTypes.PRIMARY, onClick = undefined, type = "button", value = ""}) => {

    return (
        <button className={`${styles.roundedButton} ${styles[buttonType]}`} onClick={onClick} type={type} value={value}>
            {text}
        </button>
    )
};

export default RoundedButton;