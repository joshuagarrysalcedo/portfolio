import { useIntl } from 'react-intl'
import Page from "material-ui-shell/lib/containers/Page";
import {
    Box,
    Button,
    Card,
    CardContent,
    CardHeader,
    Container,
    Grid,
    IconButton,
    Paper,
    Tooltip,
    Typography
} from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";
import CounterDialog from "./CounterApplication/CounterDialog";
import CodeIcon from "@mui/icons-material/Code";
import AddCommentIcon from "@mui/icons-material/AddComment";
import RateReviewIcon from "@mui/icons-material/RateReview";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CodeHighlighter from "../../components/CodeHighlighter/CodeHighlighter";
import React, {useState} from "react";
import sourceCode from "./CounterApplication/sourceCode.txt";
function ApplicationContainer(props){
    const intl = useIntl()
    const {title, descriptionID} = props
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
                defaultMessage: `${title}`,
            })}
        >
            <Box style={{display :"flex", flexDirection: "row", justifyContent: "center"}}>
                <Card sx={{mt: "2rem", width: "50%", maxHeight: "25%"}}>
                    <CardHeader title={intl.formatMessage({
                        defaultMessage: `${title}`,
                    })}/>
                    <CardContent>
                        <Grid container row-spacing={2}>
                            <Grid item xs={12}> <Typography variant="body" paragraph={true} sx={{textIndent:"1rem"}}>{intl.formatMessage({id: `${descriptionID}`})}</Typography></Grid>
                            <Grid item xs={12} sx={{margin: "auto"}}>
                                <Paper elevation={12} sx={{backgroundColor: "#001E3C", display:"flex", flexDirection: "row", justifyContent:"center", textAlign:"center" ,m: "auto", p:5}}>
                                    <Button variant="contained" color={"primary"} startIcon={<LaunchIcon size={"lg"}/>} onClick={handleStart}>
                                        `START ${title}`
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