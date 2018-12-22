import React, {Component} from 'react';
import loader from './assets/images/loading.svg'
import './App.css';
import {inject, observer} from "mobx-react";
import {Col, Grid, Row} from "react-bootstrap";
import PeopleComponent from "./components/people/PeopleComponent";

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
            return <img src={loader} className="loader" alt="loading-spinner"/>

        return (
            <Grid className="mt-5">
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
