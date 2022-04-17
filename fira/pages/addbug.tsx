import { Button, TextField } from "@mui/material"
import type { NextPage } from "next"
import React from "react"


const AddBug: NextPage = () => {
    const hardcodedReporterId = 1
    let description = ""

    const handleSubmit = () => {
        if (description != "") {
            fetch('/api/addbug', {
                method: 'POST',
                body: JSON.stringify({
                    description: description,
                    reporterId: hardcodedReporterId,
                })
            })
        }
    }

    const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        description = e.target.value
    }

    return (
        <div>
            <TextField onChange={handleDescriptionChange} id="outlined-basic" label="Description" variant="outlined"></TextField>
            <Button variant="outlined" onClick={handleSubmit}>Submit</Button>
        </div>
    )
}

export default AddBug
