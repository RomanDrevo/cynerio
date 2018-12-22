import React, {Component} from 'react';
import {Table} from "react-bootstrap";
import {inject, observer} from "mobx-react/index";


@inject('peopleStore')
@observer
class PersonsTable extends Component {

    state = {
        isFirstNameShow: true,
        isLastNameShow: true,
        isIpAddressShow: true
    }

    toggleFirstNameColumn = () =>{
        this.setState({isFirstNameShow: !this.state.isFirstNameShow})
    }

    toggleLastNameColumn = () =>{
        this.setState({isLastNameShow: !this.state.isLastNameShow})
    }

    toggleIpAddressColumn = () =>{
        this.setState({isIpAddressShow: !this.state.isIpAddressShow})
    }

    render() {
        const {peopleStore} = this.props

        return (
            <div className="flex-column flex">
                <input placeholder="Search" className="search-bar" value={peopleStore.search} onChange={peopleStore.updateSearch}/>
                <div className="mt-2">
                    <label className="mr-2">
                        <b>First Name</b>
                        <input onChange={this.toggleFirstNameColumn} checked={this.state.isFirstNameShow} type="checkbox"/>
                    </label>

                    <label className="mr-2">
                        <b>Last Name</b>
                        <input onChange={this.toggleLastNameColumn} checked={this.state.isLastNameShow} type="checkbox"/>
                    </label>

                    <label className="mr-2">
                        <b>IP Address</b>
                        <input onChange={this.toggleIpAddressColumn} checked={this.state.isIpAddressShow} type="checkbox"/>
                    </label>
                </div>

                <Table responsive>
                    <thead>
                    <tr>
                        {
                            this.state.isFirstNameShow && <th>First Name</th>
                        }

                        {
                            this.state.isLastNameShow && <th>Last Name</th>
                        }

                        {
                            this.state.isIpAddressShow && <th>IP Address</th>
                        }

                    </tr>
                    </thead>
                    <tbody>
                    {
                        peopleStore.filteredPeople.map(person => <TableRow key={person.id} {...this.state} person={person}/>)
                    }

                    </tbody>
                </Table>
            </div>
        )
    }
}

class TableRow extends Component {
    render() {
        const {person, isFirstNameShow, isLastNameShow, isIpAddressShow} = this.props
        // console.log('row props: ', this.props)
        return (
            <tr>
                {
                    isFirstNameShow && <td>{person.firstName}</td>
                }

                {
                    isLastNameShow && <td>{person.lastName}</td>
                }
                {
                    isIpAddressShow && <td>{person.ipAddress}</td>
                }
            </tr>
        )
    }
}


class PeopleComponent extends Component {

    render() {
        return (
            <div>
                <PersonsTable/>
                <PersonsTable/>
            </div>
        );
    }
}

export default PeopleComponent;
