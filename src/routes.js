
//import HelloWorld from './components/HelloWorld.vue';
import LoginUser from './components/LoginUser.vue';
import Users from './components/Users.vue';
import AddUser from './components/AddUser.vue';
import AddProduct from './components/Products/AddProduct.vue';
import UserEdit from './components/UserEdit.vue';
import UserDashboard from './components/UserDashboard.vue'
import ProductList from './components/Products/ProductList.vue'
import NotFound from './components/NotFound.vue'
export default [
    { path: "/", component: LoginUser, name: 'usersLogin' },
   
    {
        path: "/users", component: UserDashboard, name:"userdashboard", children: [

            {

                path: "",
                component: AddUser,
                name:"adduser",
                meta: { requiresAuth: true}
            },

            {

                path: "list",
                name:"list",
                component: Users,
                meta: { requiresAuth: true,urlRoles:['Admin'] }
            },
            {

                path: ':id',
                component: UserEdit,
                name: 'usersEdit',
                meta: { requiresAuth: true }
            },

        ]
    },
    {
        path: "/products", component: UserDashboard, name:"productdashboard", children: [

            {

                path: "",
                component: AddProduct,
                name:"addproduct",
                meta: { requiresAuth: true }
            },
            {

                path: "productList",
                component: ProductList,
                name:"productList",
                meta: { requiresAuth: true }
            },
        ]
    },
    
    { path: '/404',name:"404", component: NotFound },
    { path: '*', redirect: '/404' },

    //{path:'/users',component:Users,meta:{requiresAuth:true},name:'users'},
    //{path:'/adduser',component:AddUser,meta:{requiresAuth:true} },
    //{path:'/users/:id',component:UserEdit,name:'usersEdit',meta:{requiresAuth:true} }
]
