import { createRouter, createWebHistory } from 'vue-router'

import CoachDetail from './pages/coaches/CoachDetail.vue'
import CoachesList from './pages/coaches/CoachesList.vue'
import CoachesRegistration from './pages/coaches/CoachRegistration.vue'
import ContactCoach from './pages/requests/ContactCoach.vue'
import RequestsRecieved from './pages/requests/RequestsRecieved.vue'
import NotFound from './pages/NotFound.vue'

const routes = [
  {
    path: '/',
    redirect: '/coaches'
  },
  { path: '/coaches', component: CoachesList },
  {
    path: '/coaches/:id',
    props: true,
    component: CoachDetail,
    children: [{ path: 'contact', component: ContactCoach }]
  },
  { path: '/register', component: CoachesRegistration },
  { path: '/requests', component: RequestsRecieved },
  { path: '/:notFound(.*)', component: NotFound }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

export default router
