import Page from "material-ui-shell/lib/containers/Page";
import { useIntl } from 'react-intl'
import LaunchIcon from '@mui/icons-material/Launch';
import {Textarea} from "@mui/joy";
import CodeIcon from '@mui/icons-material/Code';
import AddCommentIcon from '@mui/icons-material/AddComment';
import RateReviewIcon from '@mui/icons-material/RateReview';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import {
    Box,
    Button,
    Card,
    CardContent,
    CardHeader, Container,
    Dialog, DialogActions, DialogContent, DialogContentText,
    DialogTitle,
    Grid, Icon,
    IconButton, List, ListItem, ListItemIcon, ListItemText,
    Paper, TextareaAutosize, TextField, Toolbar, Tooltip,
    Typography
} from "@mui/material";
import React, {useEffect, useState} from "react";
import CounterDialog from "./CounterDialog";
import CodeHighlighter from "../../../components/CodeHighlighter/CodeHighlighter";
const emails = ['username@gmail.com', 'user02@gmail.com'];
const sourceCode = require('./sourceCode.txt');

function CounterApplication() {
    const intl = useIntl()
    const [open, setOpen] = useState(false);
    const [openCode, setOpenCode] = useState(false);
    const [rawText, setRawText] = useState("");





  fetch(sourceCode)
      .then(response => response.text())
      .then(text => setRawText(text));
    const handleStart = () => {
        console.log("Open")
        setOpen(!open)

    }
    const handleOpenCode = () => {
        setOpenCode(!openCode)
    }
    return(
        <Page
            pageTitle={intl.formatMessage({
                id: 'counter',
                defaultMessage: '',
            })}
        >
            <Box style={{display :"flex", flexDirection: "row", justifyContent: "center"}}>
                <Card sx={{mt: "2rem", width: "50%", maxHeight: "25%"}}>
                    <CardHeader title={intl.formatMessage({
                        id: 'counter',
                        defaultMessage: '',
                    })}/>
                    <CardContent>
                        <Grid container row-spacing={2}>
                            <Grid item xs={12}> <Typography variant="body" paragraph={true} sx={{textIndent:"1rem"}}>{intl.formatMessage({id: 'counter_desc'})}</Typography></Grid>
                            <Grid item xs={12} sx={{margin: "auto"}}>
                                <Paper elevation={12} sx={{backgroundColor: "#001E3C", display:"flex", flexDirection: "row", justifyContent:"center", textAlign:"center" ,m: "auto", p:5}}>
                                    <Button variant="contained" color={"primary"} startIcon={<LaunchIcon size={"lg"}/>} onClick={handleStart}>
                                        Counter App
                                    </Button>
                                    <CounterDialog
                                        open={open}
                                        onClose={()=> setOpen(!open)}
                                    />
                                </Paper>

                            </Grid>
                            <Grid item xs={12} sx={{mt: "2rem"}}>
                                <Container sx={{display:"flex", justifyContent:"flex-end"}}>
                                    <Tooltip title={"click tool tip"}>
                                        <IconButton onClick={handleOpenCode}><CodeIcon/></IconButton>
                                    </Tooltip>
                                    <Tooltip title={"Comment"}>
                                        <IconButton onClick={handleOpenCode}><AddCommentIcon/></IconButton>
                                    </Tooltip>
                                    <Tooltip title={"Rate me"}>
                                        <IconButton onClick={handleOpenCode}><RateReviewIcon/></IconButton>
                                    </Tooltip>
                                    <Tooltip title={"Copy source"}>
                                        <IconButton onClick={handleOpenCode}><ContentCopyIcon/></IconButton>
                                    </Tooltip>
                                </Container>
                            </Grid>


                            <Grid item xs={12}>
                                  <CodeHighlighter language={'javascript'} code={rawText} open={openCode}/>
                            </Grid>

                        </Grid>

                    </CardContent>
                </Card>
            </Box>

        </Page>
    )
}
export default CounterApplication;