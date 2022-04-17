// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import bugService from '../../service/bug_service'

type Data = {
    bugId: number
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    if (req.method == 'POST') {
        const data = req.body;
        console.log("REMOVE BUG POST GOT ", data)
        let dataJson = JSON.parse(data)
        await bugService.removeBug(dataJson.bugId)
        res.status(200).end()
    }
}
