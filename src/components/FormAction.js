import React from "react";
import Button from "./Button";

export default function FormAction() {
    return (
        <div class="form-import">
            <h3 class="upload-subheading">
            Data in the import file is correct. Please press Continue to
            import.
            </h3>
            <div class="flex-row">
                <Button btnText="Continue Import" btnClass="continue" />
                <Button btnText="Cancel" btnClass="cancel" />
            </div>
        </div>
    )
}