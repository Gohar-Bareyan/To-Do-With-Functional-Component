import styles from "./index.module.scss";
import { BUTTON_TYPES } from "../../constants";

const Button = (props) => {
    const { text, onClick, type } = props;

    const detectButtonClassName = (type) => {
        switch (type) {
            case BUTTON_TYPES.ADD:
                return styles.add_button;
            case BUTTON_TYPES.DELETE:
                return styles.delete_button;
            case BUTTON_TYPES.EDIT:
                return styles.edit_button;
            case BUTTON_TYPES.SUBMIT:
                return styles.submit_edit_button;
            default:
                return ""
        }
    }

    return (
        <button
            onClick={onClick}
            className={
                detectButtonClassName(type)
            }
        >
            {text}
        </button>
    )
}

export default Button;