import React, { useEffect, useRef } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import PropTypes from "prop-types";
import {Collapse, List, ListItem, Paper, Popover, TextareaAutosize} from "@mui/material";
import {Textarea} from "@mui/joy";


function CodeHighlighter(props) {
    const codeRef = useRef(null);
    const {language, code, open} = props

    useEffect(() => {
        if (codeRef.current) {
            Prism.highlightElement(codeRef.current);
        }
    }, [props.language, props.code]);

    return (


                <Paper style={{maxWidth:"100%", maxHeight:"100%", overflow: "auto", }}>
                    <Collapse in={open}>
                    <pre>
                        <code ref={codeRef} className={`language-${language}`}>
                               {code}
                        </code>
                    </pre>
                    </Collapse>
                </Paper>

    );
}
CodeHighlighter.propTypes  ={
    language :  PropTypes.string.isRequired,
    code : PropTypes.string.isRequired,
    open : PropTypes.bool.isRequired

}
export default CodeHighlighter;
