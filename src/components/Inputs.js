import React from 'react'

export default function Inputs() {
    return (
        <div class="schedule-box">
            <h3 class="upload-subheading">
                Split schedule using social distancing?
            </h3>
            <div class="flex-row">
                <input
                    type="radio"
                    id="value-1"
                    name="value-1"
                    value="value-1"
                />
                <label for="value-1">Yes</label>
                <input
                    type="radio"
                    id="value-2"
                    name="value-1"
                    value="value-2"
                />
                <label for="value-2">No</label>
            </div>
        </div>
    )
}
