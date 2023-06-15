import React from 'react'
import ReactDOM from 'react-dom/client'

import { InstructorApp } from './component/InstructorApp.tsx'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <InstructorApp />
  </React.StrictMode>,
)
