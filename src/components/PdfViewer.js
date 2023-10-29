import React from 'react';

const PdfViewer = ({ pdfUrl }) => {
    return (
        <div style={{ width: '100%', height: '800px' }}>
            <iframe
                title="PDF Viewer"
                src={pdfUrl}
                width="100%"
                height="100%"
            ></iframe>
        </div>
    );
};

export default PdfViewer;
