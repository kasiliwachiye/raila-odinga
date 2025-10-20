import React from 'react';
import { Layout } from './src/components';
import './src/styles/scroll.css';

export const onClientEntry = () => {
  // IntersectionObserver polyfill for smooth scroll effects (Safari, IE)
  if (!(`IntersectionObserver` in window)) {
    return import(`intersection-observer`);
  }
};

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};
