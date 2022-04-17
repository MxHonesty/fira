import { Button } from "@mui/material";
import { Bug } from "@prisma/client";
import React from "react";

export type BugCardProps = {
    bug: Bug,
    onDelete: (deleteId: number) => void
}

const BugCard = (props: BugCardProps) => {

    const handleRemoveBug = () => {
        fetch('/api/removebug', {
            method: 'POST',
            body: JSON.stringify({
                bugId: props.bug.id
            })
        })
        props.onDelete(props.bug.id)
    }
    
    return (
        <div>
            <p>
                [Bug-{props.bug.id}] Description: {props.bug.description}. Created at {props.bug.createdAt}.
                <Button onClick={handleRemoveBug} variant="text">Remove This Bug</Button>
            </p>
        </div>
    );
}

export default BugCard
