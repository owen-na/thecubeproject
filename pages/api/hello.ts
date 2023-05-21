// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
// import { Pool } from '../../tcp-be/server'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse // <Data>, might need it, no idea yet
) {
  const { method } = req;
  console.log(method)

  // need to figure out how to have like expresses app.post(location), how do i address the location here????

  switch(method) {
    case 'POST':
        res.status(200).json({response: "HELLLO"})
    case 'GET':
        res.status(200).json({response: "THIS SHOULD BE A GETTER??"})
  }

  res.status(200).json({ name: 'John Doe' })
}
