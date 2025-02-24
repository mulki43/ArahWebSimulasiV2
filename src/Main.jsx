import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Aurora from './AuroraApp.jsx'
import Hyperspeed from './HyperspeedApp.jsx'
import CircularGallery from './Gallery.jsx'

createRoot(document.getElementById('Aurora1')).render(
  <StrictMode>
    <Aurora />
  </StrictMode>,
);

createRoot(document.getElementById('Aurora2')).render(
  <StrictMode>
    <Aurora />
  </StrictMode>,
);

createRoot(document.getElementById('Hyperspeed')).render(
  <StrictMode>
    <Hyperspeed />
  </StrictMode>,
);

createRoot(document.getElementById('Gallery')).render(
  <StrictMode>
    <CircularGallery />
  </StrictMode>,
);




