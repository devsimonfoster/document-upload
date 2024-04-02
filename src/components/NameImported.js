import React from 'react'

export default function NameImported() {
    return (
        <div class="import-name-box">
            <label id="import-name">
                <select>
                    <option selected>Select Import Name:</option>
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Last long option</option>
                </select>
            </label>
        </div>
    )
}
