import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {inject, observer} from "mobx-react";
import {Col, Grid, Row} from "react-bootstrap";
import PeopleComponent from "./people/PeopleComponent";

@inject('peopleStore')
@observer
class App extends Component {

    componentDidMount() {
        const {peopleStore} = this.props
        peopleStore.getPeople()
    }

    render() {
        const {peopleStore} = this.props

        if (peopleStore.isLoading)
            return <div>Loading...</div>

        return (
            <Grid>
                <Row>
                    <Col sm={12}>
                        <PeopleComponent/>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default App;
