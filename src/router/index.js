import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import Details from '../views/DetailsView.vue'

//creation of route lits
const routes = [
  // default route
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // route to album details, also has an id parameter so we can access is from the details page and
  // list the desired images 
  {
    path: '/album/:id',
    name: 'Details',
    component: Details
  }
]
// web
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
