import { Bug } from "@prisma/client"
import BugCard from "./bugCard"

export type BugListProps = {
    bugs: Bug[]
}

const BugList = ({bugs}: BugListProps) => {
    return (
        <ul>
            {bugs.map(bug => (
                <li key={bug.id}>
                    <BugCard id={bug.id} description={bug.description} createdAt={bug.createdAt} reporterId={bug.reporterId} fixerId={bug.fixerId}></BugCard>
                </li>
            ))}
        </ul>
    )
}

export default BugList
