import React, {Component} from 'react';
import {Table} from "react-bootstrap";
import {inject, observer} from "mobx-react/index";
import Search from 'react-search'

class PersonsTable extends Component {

    state = {
        search: ''
    }

    updateSearch = (e) => {

        console.log('--search: ',  e.target.value)
        this.setState({
            search: e.target.value
        })
    }

    render() {

        const {people} = this.props

        let filteredPeople = people.filter(
            person => {
                return person.firstName.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 ||
                    person.lastName.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
            }
        )

        console.log('--filteredPeople: ', filteredPeople)

        return (

            <div>

                <input value={this.state.search} onChange={this.updateSearch}/>

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
                        filteredPeople.map(person => <TableRow key={person.id} person={person}/>)
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
