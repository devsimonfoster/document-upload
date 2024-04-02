import React from 'react'

export default function ToggleBox() {
    return (
        <div class="toggle-box">
            <h3 class="upload-subheading">Tolerance Window:</h3>
            <div class="toggle-row">
                <div class="toggle-switch">
                    <input class="toggle-input" id="toggle" type="checkbox" />
                    <label class="toggle-label" for="toggle"></label>
                </div>
                <span class="toggle-text">Toggle ON</span>
                <div class="tolerance-row">
                    <i class="fa-regular fa-clock"></i>
                    <span class="toggle-text"> slect tolerance level </span>
                </div>
            </div>
        </div>
    )
}
