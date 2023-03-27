import ApplicationContainer from "../ApplicationContainer";
import {useState} from "react";
import TodoListDialog from "./TodoListDialog";

function TodoListApplication() {
    const [open, setOpen] = useState(false);
    const onClose = () => {
    setOpen(!open);
    }

    return (
        <ApplicationContainer title={"To Do List App"} descriptionID={"A simple To do List"} openApp={open} ApplicationDialog={TodoListDialog} onClose={onClose}/>
    );
}

export default TodoListApplication;
