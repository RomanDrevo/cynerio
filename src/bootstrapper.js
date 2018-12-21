import PeopleStore from './stores/PeopleStore'

const bootstrapper = () =>{
    const peopleStore = new PeopleStore()

    return {
        peopleStore
    }
}

export default bootstrapper