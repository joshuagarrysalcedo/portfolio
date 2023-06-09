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
import PropTypes from "prop-types";
function ApplicationContainer(props){
    const intl = useIntl()
    const {title, descriptionID, sourceCode, openApp, openSourceCode, ApplicationDialog} = props
    const [open, setOpen] = useState(openApp);
    const [openCode, setOpenCode] = useState(openSourceCode);
    const [rawText, setRawText] = useState("");



    /*fetch(sourceCode)
        .then(response => response.text())
        .then(text => setRawText(text));*/
    const handleStart = (e) => {
        e.preventDefault();
        setOpen(!open)

    }
    const handleOpenCode = () => {
        setOpenCode(!openCode)
    }
    return(
        <Page
            pageTitle={intl.formatMessage({
                id: "sample",
                defaultMessage: `${title}`,
            })}
        >
            <Box style={{display :"flex", flexDirection: "row", justifyContent: "center"}}>
                <Card sx={{mt: "2rem", width: "50%", maxHeight: "25%"}}>
                    <CardHeader title={intl.formatMessage({
                        id: "sample",
                        defaultMessage: `${title}`,
                    })}/>
                    <CardContent>
                        <Grid container row-spacing={2}>
                            <Grid item xs={12}> <Typography variant="body" paragraph={true} sx={{textIndent:"1rem"}}>{intl.formatMessage({id: `${descriptionID}`})}</Typography></Grid>
                            <Grid item xs={12} sx={{margin: "auto"}}>
                                <Paper elevation={12} sx={{backgroundColor: "#001E3C", display:"flex", flexDirection: "row" ,m: "auto", p:5}}>
                                    {/* edit this*/}
                                    <ApplicationDialog/>
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

ApplicationContainer.propTypes  ={
    title : PropTypes.string.isRequired,
    descriptionID : PropTypes.string.isRequired,
    /*sourceCode : PropTypes.string.isRequired,*/
    openApp :  PropTypes.bool.isRequired,
    /* openSourceCode: PropTypes.bool.isRequired,*/
    ApplicationDialog : PropTypes.element.isRequired,
    onClose: PropTypes.func.isRequired,
}

export default ApplicationContainer;