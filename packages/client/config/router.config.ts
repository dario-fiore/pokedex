export default [
  {
    path: '/',
    component: '../components/WithConnection/index',
    routes: [
      {
        path: '/',
        component: '../layouts/index',
        routes: [{ path: '/', component: '../pages/Explore/index' }],
      },
    ],
  },
];
