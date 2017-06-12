const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (comMod) => (componentModule) => {
  comMod(null, componentModule.default);
};

export default function createRoutes() {

  return [
      {
       path: '/',
       name: 'home',
       getComponent(nextState, comMod) {
         import('containers/Home')
           .then(loadModule(comMod))
           .catch(errorLoading);
       },
   
     },
      {
       path: '/about',
       name: 'About',
       getComponent(nextState, comMod) {
         import('containers/About')
           .then(loadModule(comMod))
           .catch(errorLoading);
       },
     },
      {
       path: '/contact-us',
       name: 'Contact',
       getComponent(nextState, comMod) {
         import('containers/Contact')
           .then(loadModule(comMod))
           .catch(errorLoading);
       },
     },
      {
       path: '/faq',
       name: 'FAQ',
       getComponent(nextState, comMod) {
         import('containers/FAQ')
           .then(loadModule(comMod))
           .catch(errorLoading);
       },
     },
       {
       path: '/account',
       name: 'Account',
       getComponent(nextState, comMod) {
         import('containers/Account')
           .then(loadModule(comMod))
           .catch(errorLoading);
       },
    },
       {
       path: '/login',
       name: 'Login or Join',
       getComponent(nextState, comMod) {
         import('containers/SignInSignUp')
           .then(loadModule(comMod))
           .catch(errorLoading);
       },
     },
       {
       path: '/subscribe',
       name: 'Subscribe',
       getComponent(nextState, comMod) {
         import('containers/Subscribe')
           .then(loadModule(comMod))
           .catch(errorLoading);
       },
     },
           {
       path: '/Checkout',
       name: 'Checkout',
       getComponent(nextState, comMod) {
         import('containers/Checkout')
           .then(loadModule(comMod))
           .catch(errorLoading);
       },
     },

      {
       path: '/dashboard',
       name: 'Dashboard',
       getComponent(nextState, comMod) {
         import('containers/AdminDashboard')
           .then(loadModule(comMod))
           .catch(errorLoading);
       },
   
     },
     {
      path: '*',
      name: 'notfound',
      getComponent(nextState, comMod) {
        import('containers/NotFoundPage')
          .then(loadModule(comMod))
          .catch(errorLoading);
      },
    },
  ];
}
