import { Box, Button, ButtonGroup, IconButton, TextField } from '@mui/material';
import React, { Component } from 'react';
import AddIcon from '@mui/icons-material/Add';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

class Edit extends Component {

    render() {
        return (
            <Box sx={{ m: this.props.isMobile ? 1 : 3 }}>

                <div>

                    <Button
                        variant="contained"
                        component="label"
                        sx={{ my: this.props.isMobile ? 1 : 2 }}
                        disableElevation
                    >
                        Upload Image
                        <input type="file" hidden onChange={this.props.imageChange} />
                    </Button>

                    &nbsp;&nbsp;

                    {
                        this.props.isFilePicked && <> {this.props.uploadedFile.name} </>
                    }

                </div>

                <TextField
                    // fullWidth
                    size={this.props.isMobile ? 'small' : 'medium'}
                    sx={{ width: this.props.isMobile ? 'unset' : '60ch' }}
                    label={"Apology letter to:"}
                    margin="normal"
                    value={this.props.title}
                    onChange={this.props.titleChange}
                />

                <h3>Reasons for behaviour:</h3>

                {
                    this.props.entries.map((item, index) => (
                        <>

                            <TextField
                                // fullWidth
                                size={this.props.isMobile ? 'small' : 'medium'}
                                name={"" + index}
                                sx={
                                    {
                                        width: this.props.isMobile ? '55vw' : '60ch',
                                        my: this.props.isMobile ? 1 : 2
                                    }
                                }
                                label={"Checkbox " + (index + 1)}
                                key={"checkbox-" + index}
                                // margin="normal"
                                value={item}
                                onChange={this.props.handleChange}
                            />

                            <ButtonGroup size="large" aria-label="button group"
                                sx={{ mx: this.props.isMobile ? 0 : 2, my: this.props.isMobile ? 1 : 2 }}
                            >

                                <IconButton
                                    color="primary" aria-label="moveup" component="span"
                                    key={"moveup-" + index}
                                    onClick={() => this.props.moveUp(index)}
                                >
                                    <ArrowUpwardIcon fontSize={this.props.isMobile ? 'medium' : 'large'} />
                                </IconButton>

                                <IconButton
                                    color="primary" aria-label="movedown" component="span"
                                    key={"movedown-" + index}
                                    onClick={() => this.props.moveDown(index)}
                                >
                                    <ArrowDownwardIcon fontSize={this.props.isMobile ? 'medium' : 'large'} />
                                </IconButton>

                                <IconButton
                                    color="primary" aria-label="remove" component="span"
                                    key={"remove-" + index}
                                    onClick={() => this.props.removeItem(index)}
                                >
                                    <RemoveCircleOutlineIcon fontSize={this.props.isMobile ? 'medium' : 'large'} />
                                </IconButton>

                            </ButtonGroup>
                        </>

                    )
                    )
                }

                <Button variant="outlined" size={this.props.isMobile ? 'medium' : 'large'} sx={{ my: 2 }}
                    onClick={this.props.newItem}
                >
                    <AddIcon />
                </Button>

            </Box >
        );
    }
}

export default Edit;