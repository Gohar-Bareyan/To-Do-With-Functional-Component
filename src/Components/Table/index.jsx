import Button from "../ButtonForm";
import styles from "./index.module.scss";
import { BUTTON_TYPES } from "../../constants";

const Table = (props) => {
    const { toDoList, handleEditText, handleComplete, handleDelete, handleEdit } = props

    return (
        <>
            {toDoList.length > 0 ?
                <table className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>N</th>
                            <th>Name</th>
                            <th>Completed</th>
                            <th>Delete</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {toDoList.map((toDo, index) => {
                            return (
                                <tr key={toDo.id}>
                                    <td>{index + 1}</td>
                                    <td className={toDo.done ? styles.deleted_text : ""}>{toDo.edited ? <input type="text" value={toDo.name} onChange={(event) => handleEditText(event, toDo.id)} /> : toDo.name}</td>
                                    <td>
                                        <input type="checkbox" onChange={() => handleComplete(toDo.id)} defaultChecked={toDo.done} />
                                    </td>
                                    <td>
                                        <Button text="Delete" onClick={() => handleDelete(toDo.id)} type={BUTTON_TYPES.DELETE} />
                                    </td>
                                    <td>
                                        {
                                            !toDo.edited ?
                                                <Button text="Edit" onClick={() => handleEdit(toDo.id)} type={BUTTON_TYPES.EDIT} /> :
                                                <Button text="Submit" onClick={() => handleEdit(toDo.id)} type={BUTTON_TYPES.SUBMIT} />
                                        }
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table> :
                <h3 className={styles.no_toDo}>No ToDo Here</h3>
            }
        </>
    )
}

export default Table