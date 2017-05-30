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
       path: '/subscribe',
       name: 'Subscribe',
       getComponent(nextState, comMod) {
         import('containers/Subscribe')
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
       path: '/',
       name: 'Account',
       getComponent(nextState, comMod) {
         import('containers/Account')
           .then(loadModule(comMod))
           .catch(errorLoading);
       },
     },
       {
       path: '/cart',
       name: 'Cart',
       getComponent(nextState, comMod) {
         import('containers/Cart')
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