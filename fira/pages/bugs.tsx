import { Bug } from "@prisma/client"
import type { GetServerSideProps, NextPage } from "next"
import BugList from "../components/bugList"
import bugService from "../service/bug_service"

export type BugsViewProps = {
    bugs: Bug[]
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const allBugs: Bug[] = await bugService.getAllBugs()
    console.log(allBugs);
    return {
        props: {bugs: JSON.parse(JSON.stringify(allBugs))},
    }
}

function BugsView(props: BugsViewProps) {
    return (
        <div>
            <h2>List Bugs</h2>
            <BugList bugs={props.bugs}></BugList>
        </div>
    )
}

export default BugsView
