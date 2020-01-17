import Home from './components/Home'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import Dashboard from './dashboard/dashboard'
export const routes = [
    {path: '/', component: Home},
    {path: '/signup', component: SignUp},
    {path: '/signin', component: SignIn},
    {path: '/dashboard', component: Dashboard},
    
];