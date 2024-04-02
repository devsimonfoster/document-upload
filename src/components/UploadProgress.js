import React from 'react'

export default function UploadProgress({ fileName, progress,fileInfo }) {
    return (
        <div class="upload-bar">
            <span class="bar-img">
                <i class="fa-regular fa-file">
                </i></span>
            <div className='upload-info'>
            {fileName && <h4>{fileName} <span>{fileInfo.size}</span></h4>}
            <progress id="progressBar" value={progress} max="100"></progress>
            </div>

        </div>
    )
}
