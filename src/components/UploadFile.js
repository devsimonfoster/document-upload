
import React, { useState } from 'react';
import UploadProgress from './UploadProgress';

export default function UploadFile() {
    const [dragging, setDragging] = useState(false);
    const [file, setFile] = useState(null);
    const [progress, setProgress] = useState(0);
    const [fileName, setFileName] = useState('');
    const [fileInfo, setFileInfo] = useState({ name: '', size: '' }); 


    const formatFileSize = (bytes, decimalPoint = 2) => {
        if (bytes === 0) return '0 Bytes';
        const k = 1024,
              dm = decimalPoint <= 0 ? 0 : decimalPoint,
              sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
              i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    };

    const simulateUpload = (file) => {
        setFileInfo({ name: file.name, size: formatFileSize(file.size) });
        setFileName(file.name);
        let progress = 0;
        const interval = setInterval(() => {
            progress += 10;
            setProgress(progress);
            if (progress >= 100) clearInterval(interval);
        }, 100);
    };


    const handleDragOver = (event) => {
        event.preventDefault();
        if (!dragging) {
            setDragging(true);
        }
    };

    const handleDrop = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setProgress(0);
        setDragging(false);
        const files = event.dataTransfer.files;
        if (files && files.length > 0) {
            simulateUpload(files[0]);
            const file = files[0];
            setFile(file);
        }
    };

    const handleDragEnter = (event) => {
        event.preventDefault();
        setDragging(true);
    };

    const handleDragLeave = (event) => {
        event.preventDefault();
        setDragging(false);
    };

    return (
        <>
            <div className="card">
                <div className="drop_box"
                    onDragOver={handleDragOver}
                    onDragEnter={handleDragEnter}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    style={{ border: dragging ? '2px dashed #000' : '1px solid #ddd' }} // Change border when dragging
                >
                    <span className="drag-img">
                        <i className="fa-solid fa-file"></i>
                    </span>
                    <p>Drag & drop Here or <span className="bold">Browse </span></p>
                    <input
                        type="file"
                        hidden
                        id="fileID"
                        style={{ display: 'none' }}
                        onChange={(event) => setFile(event.target.files[0])} // Update the file when selected through the browse option
                    />
                </div>
                <button className="btn">Upload Manifest</button>

            </div>
            {
                progress > 0 ? <UploadProgress progress={progress} fileName={fileName} fileInfo={fileInfo}/>
                : null
            }
        </>
    );
}

