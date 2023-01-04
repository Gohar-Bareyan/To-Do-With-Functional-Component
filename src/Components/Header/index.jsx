import Button from "../ButtonForm";
import styles from "./index.module.scss";
import { BUTTON_TYPES } from "../../constants";

const Header = (props) => {
    const { newToDo, handleToDoChange, handleAdd } = props

    return (
        <>
            <h1 className={styles.header}>ToDo App</h1>
            <div className={styles.add_container}>
                <input type="text" value={newToDo} placeholder="ToDo Title" onChange={handleToDoChange} className={styles.add_todo_list_input} />
                <Button text="Add" onClick={handleAdd} type={BUTTON_TYPES.ADD} />
            </div>
        </>
    )
}

export default Header;