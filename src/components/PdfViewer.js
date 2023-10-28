import React, { useState } from 'react';
import { Document, Page, pdfjs } from '@react-pdf/renderer';
import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.min';


const PdfViewer = ({ url }) => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <div>
            <Document
                file={url}
                onLoadSuccess={onDocumentLoadSuccess}
                options={{ workerSrc: pdfjsWorker }}
            >
                <Page pageNumber={pageNumber} />
            </Document>
            <p>Page {pageNumber} of {numPages}</p>
        </div>
    );
};

export default PdfViewer;
