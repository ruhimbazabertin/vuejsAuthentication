import Home from './components/Home'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import Dashboard from './dashboard/dashboard'
import store from './store';
export const routes = [
    {path: '/', component: Home},
    {path: '/signup', component: SignUp},
    {path: '/signin', component: SignIn},
    {path: '/dashboard', 
    component: Dashboard,
       //Setup route Guard to dashboard 
     beforeEnter (to, from, next) {
         if(store.state.idToken){
             next()
         } else {
            next('/')
         }
     }
       },
    
];