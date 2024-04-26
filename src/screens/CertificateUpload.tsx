import { useCallback, useState } from 'react';
import { useResizeObserver } from '@wojtekmaj/react-hooks';
import { pdfjs, Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import samplePdf from "../assets/pdfs/ISO-9000-2015.pdf"

import './Sample.css';

import type { PDFDocumentProxy } from 'pdfjs-dist';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

const options = {
  cMapUrl: '/cmaps/',
  standardFontDataUrl: '/standard_fonts/',
};

const resizeObserverOptions = {};

const maxWidth = 800;

type PDFFile = string | File | null;

export function CertificateUpload() {
  const [file, setFile] = useState<PDFFile>(samplePdf);
  const [numPages, setNumPages] = useState<number>();
  const [containerRef, setContainerRef] = useState<HTMLElement | null>(null);
  const [containerWidth, setContainerWidth] = useState<number>();

  const onResize = useCallback<ResizeObserverCallback>((entries) => {
    const [entry] = entries;

    if (entry) {
      setContainerWidth(entry.contentRect.width);
    }
  }, []);

  useResizeObserver(containerRef, resizeObserverOptions, onResize);

  function onFileChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const { files } = event.target;

    if (files && files[0]) {
      setFile(files[0] || null);
    }
  }

  function onDocumentLoadSuccess({ numPages: nextNumPages }: PDFDocumentProxy): void {
    setNumPages(nextNumPages);
  }

  return (
    <div className="Example">
      <header>
        <h1>react-pdf sample page</h1>
      </header>
      <div className="Example__container">
        <div className="Example__container__load">
          <label htmlFor="file">Load from file:</label>{' '}
          <input onChange={onFileChange} type="file" />
        </div>
        <div className="Example__container__document" ref={setContainerRef}>
          <Document file={file} onLoadSuccess={onDocumentLoadSuccess} options={options}>
            {Array.from(new Array(numPages), (el, index) => (
              <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                width={containerWidth ? Math.min(containerWidth, maxWidth) : maxWidth}
              />
            ))}
          </Document>
        </div>
      </div>
    </div>
  );
}










// import { PDFViewer,} from "@react-pdf/renderer"
// import { Document } from "react-pdf";
// import { createTw } from "react-pdf-tailwind";
// import samplePdf from "../assets/pdfs/ISO-9000-2015.pdf"


// // The 'theme' object is your Tailwind theme config
// const tw = createTw({
//   theme: {
//     fontFamily: {
//       sans: ["Comic Sans"],
//     },
//     extend: {
//       colors: {
//         custom: "#bada55",
//       },
//     },
//   },
// });

// export function CertificateUpload() {
//   return (
//     <main>
//       <PDFViewer width="100%" height="650px">
//         <Document file={samplePdf}>
            
//         </Document>
//       </PDFViewer>
//     </main>
//   );
// }

// //  const CertificateUpload1 = () => {
// //     return <div>
// //         Certificate Upload
// //     </div>
// // }

