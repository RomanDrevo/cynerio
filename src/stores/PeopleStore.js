import {observable, action, runInAction} from "mobx";
import axios from 'axios'
import People from "../models/People";

export default class PeopleStore{
    @observable isLoading = false

    @observable people = []

    // @action
    // getPosts = () =>{
    //     // console.log('here')
    //     axios.get('db.json').then((res)=> console.log({res}))
    // }

    @action
    async getPeople(){
        this.isLoading = true
        try {
            const response = await axios.get('https://jsonblob.com/api/jsonBlob/cf5497cd-fc54-11e8-a36c-dfedecf31ebc')

            // console.log('====resp: ', response.data.map(json => People.reconstituteFrom(json)))

            runInAction(()=> this.people = response.data.map(json => People.reconstituteFrom(json)))
        }
        catch (e) {
            console.log({e})
        }
        finally {
            this.isLoading = false
            // console.log('====this.people: ', this.people)

        }
    }

}