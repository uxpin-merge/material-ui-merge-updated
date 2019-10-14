import * as React from 'react';

import IglooSmallHeader from '../IglooSmallHeader';


const menu=[
  {
    label: 'NEW RELEASES',
    children: [
      {
        label: 'Shoes',
        children: [
          {
            label: 'Lifestyle',
            icon: 'home'
          },
          {
            label: 'Running',
          },
          {
            label: 'Training',
          },
          {
            label: 'Basketball',
          },
          {
            label: 'Footer',
          },
          {
            label: 'Soccer',
          },
          {
            label: 'Tennis',
          },
        ],
      },
      {
        label: 'Clothing',
        children: [
          {
            label: 'Shorts',
          },
          {
            label: 'Polos',
          },
          {
            label: 'Jacket & Sweatshirts',
          },
        ],
      },
      {
        label: 'Sale',
        children: [
          {
            label: 'Shoes',
          },
          {
            label: 'Clothing',
          },
        ],
      },
    ],
  },
  { label: 'MEN', icon: 'far fa-male' },
  { label: 'WOMEN', icon: 'far fa-female' },
  { label: 'KIDS', icon: 'far fa-child' },
]



export default (
  <IglooSmallHeader menus={menu} uxpId="1"/>  
);