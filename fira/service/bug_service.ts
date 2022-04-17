import { Bug } from '@prisma/client'
import prisma from '../lib/prisma'

export class BugService {
    async getAllBugs(): Promise<Bug[]> {
        console.log("[+] CALLED GET ALL BUGS")
        const allBugs = await prisma.bug.findMany()
        return allBugs
    }

    async addBug(description: string, reporterId: number) {
        console.log("[+] ADD BUG")
        await prisma.bug.create({data: {
                description: description,
                reporterId: reporterId,
            }
        })
    }
}

let bugService = new BugService()
export default bugService
