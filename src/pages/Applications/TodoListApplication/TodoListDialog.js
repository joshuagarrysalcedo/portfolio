import {
    Checkbox,
    Container,
    createTheme,
    CssBaseline, Divider,
    FormControl, FormControlLabel, FormGroup,
    FormHelperText, IconButton,
    Input,
    InputLabel, List, ListItem, ListItemText,
    Paper, TextField,
    ThemeProvider, Typography
} from "@mui/material";
import {useState} from "react";

function TodoListDialog() {
    const [task, setTask] = useState([]);
    const [completedTask, setCompletedTask] = useState([])
    const [currentItem, setItem] = useState();
    const [textDeco, setTextDeco] = useState("none");

    const handleChange = (e, item) => {
        e.preventDefault();
        item.completed = !item.completed;

       if(item.completed){
           setCompletedTask([...task, {name: item.name, completed: item.completed}])
           removeItem(item);
       }


    };


    const addItem = (e) => {
        setTask([...task, {name: e, completed: false}])
    }
    const removeItem = (item) => {
        setTask(
            task.filter(list => list.completed !== true)
        );
    }



    return (
        <List>
            <ListItem>
                <Input
                    value={currentItem}
                    onChange={(e)=> {
                        e.preventDefault();
                        setItem(e.target.value)
                    }}
                    onKeyDown={(ev) => {
                        console.log(`Pressed keyCode ${ev.key}`);
                        console.log(`current value ${currentItem}` )
                        if (ev.key === 'Enter') {
                            if(currentItem !== ""){
                                addItem(currentItem)
                                setItem("");
                            }

                        }
                    }}
                />
            </ListItem>
            <Divider/>
            <Typography variant={"h5"}>Tasks</Typography>
            {task.map((item, index) => {
                return(
                    <ListItem>
                        <FormControlLabel  labelPlacement="start" control={
                            <Checkbox
                                key={index}
                                onChange={(e) => handleChange(e, item)}
                                size="small"
                                sx={{
                                    opacity: "0",
                            transition: "all 0.5s",
                            "&:hover": {
                                transition: "all 0.5s",
                                opacity: "1",
                            },



                        }} />} label={item.name}
                        />
                    </ListItem>

                )
            })}

        </List>
    );
}


export default TodoListDialog;