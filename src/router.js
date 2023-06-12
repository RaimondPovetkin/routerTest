import {createRouter, createWebHistory} from "vue-router";
import firstComponent from "@/components/firstComponent.vue";
import secondComponent from "@/components/secondComponent.vue";
//import VueRouter from 'vue-router'

export default createRouter({
    history: createWebHistory(),
    routes: [
        {path:'/', component: firstComponent},
        {path:'/draw', component: secondComponent},
    ]
})


// let router = new createRouter({
//     history: createWebHistory(),
//     routes:[
//         {
//             path: '/',
//             name: 'home',
//             component: firstPage
//         },
//         {
//             path: '/draw',
//             name: 'draw',
//             component: drawPage
//         }
//     ]
// })
//
// export default router