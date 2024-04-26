import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Landing } from './screens/Landing'
import { CertificateUpload } from './screens/CertificateUpload'
import { DocumentUpload } from './screens/DocumentUpload'
import { Catalog } from './screens/Catalog'
import { Settings } from './screens/Settings'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/cert" element={<CertificateUpload />} />
          <Route path="/document" element={<DocumentUpload />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
