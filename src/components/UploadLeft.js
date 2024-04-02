import React from 'react'
import NameImported from './NameImported'
import UploadFile from './UploadFile'
import UploadProgress from './UploadProgress'
import ToggleBox from './ToggleBox'

export default function UploadLeft() {
    return (
  
            <div class="upload-form-left">
                <NameImported />
                <h3 class="upload-subheading">
                    Select a manifest that you'd like to import
                </h3>
                <UploadFile />
                <div class="data-checking">
                    <h3 class="upload-subheading">Elapse Data Checking:</h3>
                    <span class="text-green">No Elapsed Dates!</span>
                </div>
                <ToggleBox />
            </div>
    )
}
