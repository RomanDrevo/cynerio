import {observable, action, runInAction} from "mobx";
import axios from 'axios'
import Post from "../models/Post";

export default class TestStore{
    @observable x = 1
    @observable isLoading = false

    @observable posts = []

    // @action
    // getPosts = () =>{
    //     // console.log('here')
    //     axios.get('db.json').then((res)=> console.log({res}))
    // }

    @action
    async getPosts(){
        this.isLoading = true
        try {
            const posts = await axios.get('https://jsonblob.com/api/jsonBlob/cf5497cd-fc54-11e8-a36c-dfedecf31ebc')
            console.log(posts)

            runInAction(()=> this.posts = posts.data.map(json => Post.reconstituteFrom(json)))
        }
        catch (e) {
            console.log({e})
        }
        finally {
            this.isLoading = false
        }
    }

}