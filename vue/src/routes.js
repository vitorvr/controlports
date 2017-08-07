import Environments from './components/environments/Environments.vue'
import Domains from './components/domains/Domains.vue'
import Interfaces from './components/interfaces/Interfaces.vue'

export const routes = [
  {path: '/environments', component: Environments},
  {path: '/domains', component: Domains},
  {path: '/interfaces', component: Interfaces}
];