import { Button, ButtonGroup, IconButton, TextField } from '@mui/material';
import React, { Component } from 'react';
import AddIcon from '@mui/icons-material/Add';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

class Edit extends Component {

    render() {
        return (
            <div>

                <div>

                    <Button
                        variant="contained"
                        component="label"
                        sx={{ my: 2 }}
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
                    sx={{ width: "60ch" }}
                    label={"Apology letter to:"}
                    margin="normal"
                    value={this.props.title}
                    onChange={this.props.titleChange}
                />

                <h3>Reasons for behaviour:</h3>

                {this.props.entries.map((item, index) => (
                    <>

                        <TextField
                            // fullWidth
                            name={"" + index}
                            sx={{ width: "60ch" }}
                            label={"Checkbox " + (index + 1)}
                            key={"checkbox-" + index}
                            margin="normal"
                            value={item}
                            onChange={this.props.handleChange}
                        />

                        <ButtonGroup size="large" aria-label="large button group" sx={{ m: 2 }}>

                            <IconButton
                                color="primary" aria-label="moveup" component="span"
                                key={"moveup-" + index}
                                onClick={() => this.props.moveUp(index)}
                            >
                                <ArrowUpwardIcon fontSize='large' />
                            </IconButton>

                            <IconButton
                                color="primary" aria-label="movedown" component="span"
                                key={"movedown-" + index}
                                onClick={() => this.props.moveDown(index)}
                            >
                                <ArrowDownwardIcon fontSize='large' />
                            </IconButton>

                            <IconButton
                                color="primary" aria-label="remove" component="span"
                                key={"remove-" + index}
                                onClick={() => this.props.removeItem(index)}
                            >
                                <RemoveCircleOutlineIcon fontSize='large' />
                            </IconButton>

                        </ButtonGroup>
                    </>

                )
                )}

                <Button variant="outlined" size="large" sx={{ my: 2 }}
                    onClick={this.props.newItem}
                >
                    <AddIcon />
                </Button>
            </div>
        );
    }
}

export default Edit;