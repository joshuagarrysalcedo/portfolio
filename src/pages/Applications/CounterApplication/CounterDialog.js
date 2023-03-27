import {useEffect, useState} from "react";
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography} from "@mui/material";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
import RestartAltOutlinedIcon from "@mui/icons-material/RestartAltOutlined";
import PropTypes from "prop-types";

function CounterDialog(props) {
    const {open, onClose} = props;
    const [value, setValue] = useState(0);
    const [color, setColor] = useState("inherit");

    const handleAdd = () =>{
        setValue(value + 1)
    }
    const handleMinus = () => {
        setValue(value - 1)
    }
    const handleReset = () => {
        setValue(0)
    }
    useEffect(()=>{
        if(value < 0){
            setColor("red")
        }else {
            setColor("inherit")
        }
    }, [value])
    return (
        <div>
            <Dialog open={open} onClose={onClose}>
                <DialogTitle>Count</DialogTitle>
                <DialogContent>
                    <DialogContentText style={{display: "flex", justifyContent: "center", textAlign : "center"}}>
                        <Typography variant={"h5"} color={color}>
                            {value}
                        </Typography>
                    </DialogContentText>

                </DialogContent>
                <DialogActions>

                    <Button onClick={handleAdd} startIcon={<AddCircleOutlineOutlinedIcon/>} >Add</Button>
                    <Button onClick={handleMinus} startIcon={<RemoveCircleOutlineOutlinedIcon/>}> Minus</Button>
                    <Button onClick={handleReset} startIcon={<RestartAltOutlinedIcon/>}> Reset</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

CounterDialog.propTypes  ={
    open :  PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
}
export default CounterDialog;