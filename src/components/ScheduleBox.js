import React from 'react'

export default function ScheduleBox() {
    return (
        <div class="schedule-box">
            <h3 class="upload-subheading">Client:</h3>
            <div class="flex-row">
                <input
                    type="radio"
                    id="value-3"
                    name="value-2"
                    value="value-3"
                />
                <label for="value-3">Single</label>
                <input
                    type="radio"
                    id="value-4"
                    name="value-2"
                    value="value-4"
                />
                <label for="value-4">Multiple</label>
            </div>
        </div>
    )
}
