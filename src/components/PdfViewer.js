import React, { useState } from 'react';


const PdfViewer = ({ url }) => {
    return (
        <div>
            <embed src={url} type="application/pdf" width="100%" height="1200px" />
        </div>
    );
};

export default PdfViewer;
