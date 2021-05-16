import phoneCall from './page/phoneCall.js';
import loadable from "@loadable/component";
export default [
  { path: '/index',
    meta: {
      auth: false,
    },
    name: 'index',
    components: loadable(() => import('./page/phoneCall.js'))
  },
  { path: '/interCome',
    meta: {
      auth: false,
    },
    name: 'interCome',
    components: loadable(() => {
      import('./page/phoneCall.js')
    })
  },
]