import { Bug } from "@prisma/client";
import React from "react";


const BugCard = ({id, description, createdAt}: Bug) => {
    return (
        <div>
            <p>
                You are viewing Bug number {id}.Description: {description}. Created at {createdAt}.
            </p>
        </div>
    );
}

export default BugCard
