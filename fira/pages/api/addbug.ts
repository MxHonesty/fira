// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Bug } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'
import bugService from '../../service/bug_service'

type Data = {
  name: Bug
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    if (req.method == 'POST') {
        const data = req.body;
        console.log("ADD BUG POST GOT ", data)
        let dataJson = JSON.parse(data)
        await bugService.addBug(dataJson.description, dataJson.reporterId)
        res.status(200).end()
    }
}
