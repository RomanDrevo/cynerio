import TestStore from './stores/TestStore'
import PeopleStore from './stores/PeopleStore'

const bootstrapper = () =>{
    const testStore = new TestStore()
    const peopleStore = new PeopleStore()

    return {
        testStore, peopleStore
    }
}

export default bootstrapper