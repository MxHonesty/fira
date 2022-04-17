import { Bug } from "@prisma/client"
import { Component } from "react"
import BugCard from "./bugCard"

export type BugListProps = {
    bugs: Bug[]
}

export default class BugList extends Component<BugListProps, BugListProps> {
    constructor(props: BugListProps) {
        super(props)
        this.state = {
            bugs: [...props.bugs]
        }
        this.handleBugRemoved = this.handleBugRemoved.bind(this);
    }

    handleBugRemoved(deletedId: number) {
        let currentBugs = this.state.bugs
        this.setState({
            bugs: currentBugs.filter(bug => bug.id != deletedId)
        })
    }

    render() {
        return (
            <ul>
                {this.state.bugs.map(bug => (
                    <li key={bug.id}>
                        <BugCard bug={{
                            id: bug.id,
                            description: bug.description,
                            createdAt: bug.createdAt,
                            reporterId: bug.reporterId,
                            fixerId: bug.fixerId
                        }} onDelete={this.handleBugRemoved} ></BugCard>
                    </li>
                ))}
            </ul>
        )
    }
}
