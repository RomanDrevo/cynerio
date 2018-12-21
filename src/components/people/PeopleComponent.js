import React, {Component} from 'react';
import {Table} from "react-bootstrap";
import {inject, observer} from "mobx-react/index";

class PersonsTable extends Component {
    render() {

        const {people} = this.props

        return (
            <Table responsive>
                <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>IP Address</th>
                </tr>
                </thead>
                <tbody>
                {
                    people.map(person => <TableRow key={person.id} person={person}/>)
                }

                </tbody>
            </Table>
        )
    }
}

class TableRow extends Component {
    render() {
        const {person} = this.props
        return (
            <tr>
                <td>{person.firstName}</td>
                <td>{person.lastName}</td>
                <td>{person.ipAddress}</td>
            </tr>
        )
    }
}

@inject('peopleStore')
@observer
class PeopleComponent extends Component {

    render() {
        const {peopleStore} = this.props
        const {people} = peopleStore

        return (
            <div>
                <PersonsTable people={people}/>
                <PersonsTable people={people}/>
            </div>
        );
    }
}

export default PeopleComponent;
