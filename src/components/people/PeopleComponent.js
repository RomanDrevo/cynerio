import React, {Component} from 'react';
import {Table} from "react-bootstrap";
import {inject, observer} from "mobx-react/index";


@inject('peopleStore')
@observer
class PersonsTable extends Component {

    render() {
        const {peopleStore} = this.props

        return (
            <div>
                <input value={peopleStore.search} onChange={peopleStore.updateSearch}/>

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
                        peopleStore.filteredPeople.map(person => <TableRow key={person.id} person={person}/>)
                    }

                    </tbody>
                </Table>
            </div>
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


class PeopleComponent extends Component {

    render() {
        return (
            <div>
                <PersonsTable />
                <PersonsTable />
            </div>
        );
    }
}

export default PeopleComponent;
