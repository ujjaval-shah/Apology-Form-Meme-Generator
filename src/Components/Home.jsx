import { Container, CssBaseline, Tab, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { Component } from 'react';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Edit from './Edit';
import Preview from './Preview';

class Home extends Component {

    state = {
        isMobile: window.innerWidth < 860,
        value: "1",
        title: "",
        entries: [
            "The media convinced me he was finished.",
            "I don't know shit about Cricket.",
            "I only looked at stats.",
            "My agenda blinded me.",
            "I was jealous of <HIS NAME/TEAM>.",
            "I was on crack.",
        ],
        uploadedFile: null,
        isFilePicked: false
    }

    // Responsive

    updateIsMobile = () => {
        this.setState({
            isMobile: window.innerWidth < 860
        });
    }

    componentDidMount = () => {
        window.addEventListener('resize', this.updateIsMobile);
    }

    componentWillUnmount = () => {
        window.removeEventListener('resize', this.updateIsMobile);
    }

    handleTabChange = (event, value) => {
        this.setState({ value });
    };

    // For Edit.jsx

    titleChange = (evt) => {
        this.setState({ title: evt.target.value })
    }

    handleChange = (evt) => {
        const value = evt.target.value
        const index = Number(evt.target.name)
        let entries = [...this.state.entries]
        entries[index] = value
        this.setState({ entries })
    }

    moveDown = (index) => {
        let entries = [...this.state.entries]
        // console.log(index)
        if (index < entries.length - 1) {
            entries = [
                ...entries.slice(0, index),
                entries[index + 1],
                entries[index],
                ...entries.slice(index + 2)
            ]
            this.setState({ entries })
        }
    }

    removeItem = (index) => {
        let entries = [...this.state.entries]
        entries = [
            ...entries.slice(0, index),
            ...entries.slice(index + 1)
        ]
        this.setState({ entries })
    }

    newItem = () => {
        // let entries = [...this.state.entries]
        this.setState({ entries: [...this.state.entries, ""] })
    }

    moveUp = (index) => {
        let entries = [...this.state.entries]
        // console.log(index)
        if (index > 0) {
            entries = [
                ...entries.slice(0, index - 1),
                entries[index],
                entries[index - 1],
                ...entries.slice(index + 1, entries.length)
            ]
            this.setState({ entries })
        }
    }

    // Image Upload

    imageChange = (event) => {
        this.setState({
            uploadedFile: event.target.files[0],
            isFilePicked: true
        })
    };

    render() {
        return (
            <div>
                <React.Fragment>
                    <CssBaseline />
                    <Container
                        // maxWidth="md"
                        sx={{ m: 0, padding: 0 }}
                    >
                        <Box sx={{ bgcolor: '#F7F9FB', minHeight: '100vh', padding: this.state.isMobile ? 1 : 2 }}>
                            <Typography variant="h5" gutterBottom component="div">
                                Apology Form Meme Generator
                            </Typography>
                            <TabContext
                                value={this.state.value}
                            >
                                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                    <TabList onChange={this.handleTabChange} aria-label="lab API tabs example">
                                        <Tab label="Edit" value="1" />
                                        <Tab label="Preview" value="2" />
                                    </TabList>
                                </Box>
                                <TabPanel value="1">

                                    <Edit
                                        isMobile={this.state.isMobile}
                                        title={this.state.title}
                                        titleChange={this.titleChange}
                                        entries={this.state.entries}
                                        handleChange={this.handleChange}
                                        moveUp={this.moveUp}
                                        moveDown={this.moveDown}
                                        removeItem={this.removeItem}
                                        newItem={this.newItem}
                                        uploadedFile={this.state.uploadedFile}
                                        isFilePicked={this.state.isFilePicked}
                                        imageChange={this.imageChange}
                                    />

                                </TabPanel>
                                <TabPanel value="2">

                                    <Preview
                                        isMobile={this.state.isMobile}
                                        title={this.state.title}
                                        uploadedFile={this.state.uploadedFile}
                                        isFilePicked={this.state.isFilePicked}
                                        entries={this.state.entries}
                                    />

                                </TabPanel>
                            </TabContext>
                        </Box>
                    </Container>
                </React.Fragment>
            </div >
        );
    }
}

export default Home;