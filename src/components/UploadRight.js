import React from 'react'
import TestingBlock from './TestingBlock'
import Inputs from './Inputs'
import ScheduleBox from './ScheduleBox'

export default function UploadRight() {
    return (

        <div class="upload-form-right">
            <Inputs />
            <div class="data-checking locaion-checking">
                <h3 class="upload-subheading">Loctaion Checking:</h3>
                <span class="text-green">All Available!</span>
            </div>
            <ScheduleBox />
            <TestingBlock />
        </div>
    )
}
