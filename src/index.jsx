import React from 'react';
import { createRoot } from 'react-dom/client';
import { Todo } from './Todo';
import 'tailwindcss/tailwind.css'

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <div className="flex items-center justify-center min-h-screen md:h-full">
      <Todo />
    </div>
  </React.StrictMode>
);