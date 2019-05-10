
import HelloWorld from './components/HelloWorld.vue';
import Users from './components/Users.vue';
import AddUser from './components/AddUser.vue';
import UserEdit from './components/UserEdit.vue';

export default [
    {path:'/',component:HelloWorld },
    {path:'/users',component:Users },
    {path:'/adduser',component:AddUser },
    {path:'/users/:id',component:UserEdit,name:'usersEdit' }


]