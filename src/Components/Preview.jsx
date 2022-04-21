import { Box, Checkbox, FormControlLabel, FormGroup, Grid } from '@mui/material';
import React, { Component } from 'react';

class Preview extends Component {
    render() {
        return (
            <div>
                <Box component="div" sx={{ border: '1px dashed grey' }}>
                    <Box component="h2" className="formheader" sx={{ m: 2, textAlign: 'center' }}>
                        {`${this.props.title} Apology Form`}
                    </Box>
                    <Box component="div"
                        style={styles.preview}
                        sx={{ m: 2, textAlign: 'center' }}
                    >

                        {
                            this.props.isFilePicked && <img
                                src={URL.createObjectURL(this.props.uploadedFile)}
                                style={styles.image}
                                alt=""
                            />
                        }

                        {/* <div style={{ display: "inline", height: "100%", padding: "auto" }}>
                            Apology Form
                        </div> */}
                    </Box>

                    <Box component="div" sx={{ m: 2 }}>
                        <h3>
                            Reasons for behaviour:
                        </h3>
                    </Box>

                    <Grid container spacing={1} sx={{ m: 2 }}>
                        {
                            this.props.entries.map((item, index) => (
                                <Grid item xs={6} key={"" + index}>
                                    <FormGroup>
                                        <FormControlLabel control={
                                            <Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} />
                                        } label={item} />
                                    </FormGroup>
                                </Grid>
                            ))
                        }
                    </Grid >

                    <Box component="div" sx={{ m: 2 }}>
                        <h3>
                            {`I am sorry for my behaviour and I will hereby respect ${this.props.title}.`}
                        </h3>
                    </Box>

                </Box>

            </div >
        );
    }
}


const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 50,
    },
    preview: {
        // marginTop: 50,
        height: 200,
        // display: "inline",
        flexDirection: "column",
    },
    image: {
        objectFit: "contain",
        maxWidth: "100%",
        maxHeight: "100%",
        width: "auto",
        height: "auto",
        margin: "auto",
    },
    delete: {
        cursor: "pointer",
        padding: 15,
        background: "red",
        color: "white",
        border: "none",
    },
};

export default Preview;