import React from 'react';
import { createRoot } from 'react-dom/client';
import Gallery from './Gallery';

const container = document.getElementById('react-gallery-root');
if (container) {
  const root = createRoot(container);
  root.render(<Gallery />);
}
