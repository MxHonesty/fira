import { Bug } from '@prisma/client'
import prisma from '../lib/prisma'

export class BugService {
    async removeBug(bugId: number) {
        console.log("[+] CALLED REMOVE BUG")
        await prisma.bug.delete({
            where: {
                id: bugId
            }
        })
    }

    async getAllBugs(): Promise<Bug[]> {
        console.log("[+] CALLED GET ALL BUGS")
        const allBugs = await prisma.bug.findMany()
        return allBugs
    }

    async addBug(descriptionGot: string, reporterId: number) {
        console.log("[+] ADD BUG")
        await prisma.bug.create({data: {
                description: descriptionGot,
                reporter : {
                    connect: {id: reporterId}
                }
            }
        })
    }
}

let bugService = new BugService()
export default bugService
