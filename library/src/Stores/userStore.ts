import {observable, action, computed} from 'mobx';

class userStore{
    @observable user=[];

    @action setUser = (user)=> {
        this.user = user;
    }
}

const store = new userStore();
export default  store;