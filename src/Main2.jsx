import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import RollingGallery from './RollingApp.jsx'

createRoot(document.getElementById('Rolling')).render(
  <StrictMode>
    <RollingGallery />
  </StrictMode>,
);



