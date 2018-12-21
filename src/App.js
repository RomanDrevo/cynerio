import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {inject, observer} from "mobx-react";
import {Col, Grid, Row} from "react-bootstrap";

@inject('testStore', 'peopleStore')
@observer
class App extends Component {

    componentDidMount() {
        const {peopleStore} = this.props

        console.log('peopleStore: ', peopleStore)

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
                {/*<header className="App-header">*/}
                    {/*<img src={logo} className="App-logo" alt="logo"/>*/}
                    {/*<p>*/}
                        {/*Edit <code>src/App.js</code> and save to reload.*/}
                    {/*</p>*/}
                    {/*<a*/}
                        {/*className="App-link"*/}
                        {/*href="https://reactjs.org"*/}
                        {/*target="_blank"*/}
                        {/*rel="noopener noreferrer"*/}
                    {/*>*/}
                        {/*Learn React*/}
                    {/*</a>*/}
                {/*</header>*/}

                {
                    peopleStore.people.map(x => <h2 className="" key={x.id}>{x.firstName}</h2>)
                }
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default App;
