import React, { Component } from 'react';
import './App.css';
import {PhoneListContainer, PhoneDetailComponent} from './components';
import {AppBar, Toolbar, Typography, Grid } from 'material-ui/index';
import axios from 'axios';


class App extends Component {
    constructor(props){
        super(props);
        this.phone = {
            data: [],
            selected: []
        }
    }

    componentDidMount(){
        // Make HTTP reques with Axios
        axios.get('/phones')
            .then((res) => {
                // Set state with result
                this.phone.data = res.data.phones;
                this.setState({data: res.data.phones});
            });
    }

    Details = value => () =>{
        this.phone.selected = value;
        this.setState({selected:value});
    };

    render() {
        return (
            <div className="App">
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="title" color="inherit">
                            Phone simple catalog
                        </Typography>
                    </Toolbar>
                </AppBar>
                <div className="main_container">
                    <Grid container spacing={24}>
                        <Grid item xs={12} md={6}>
                            <PhoneListContainer phones={this.phone.data} view={this.Details.bind(this)}/>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <PhoneDetailComponent phone={this.phone.selected}/>
                        </Grid>
                    </Grid>
                </div>
            </div>
        );
    }
}

export default App;