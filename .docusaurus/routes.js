
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug','296'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config','2da'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content','92a'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData','4b2'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata','8ab'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry','178'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes','d1d'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page','13b'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/','b35'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/','901'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/components',
        component: ComponentCreator('/components','ae4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/introduction',
        component: ComponentCreator('/introduction','e7c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/nodes',
        component: ComponentCreator('/nodes','e5c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/onboarding',
        component: ComponentCreator('/onboarding','357'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/technology/actor-model',
        component: ComponentCreator('/technology/actor-model','1fb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/technology/capabilities',
        component: ComponentCreator('/technology/capabilities','809'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/technology/gas-balance',
        component: ComponentCreator('/technology/gas-balance','b21'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/technology/parallelism',
        component: ComponentCreator('/technology/parallelism','764'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/technology/state',
        component: ComponentCreator('/technology/state','c5c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/technology/state-transition',
        component: ComponentCreator('/technology/state-transition','a6d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/technology/wasm',
        component: ComponentCreator('/technology/wasm','e4b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/upgrade',
        component: ComponentCreator('/upgrade','a11'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
