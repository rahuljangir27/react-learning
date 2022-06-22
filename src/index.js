import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import Rahul from './Rahul';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(<Rahul />);
