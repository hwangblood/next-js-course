// https://<yoursite.com>/api/revalidate?secret=<token>
// http://localhost:3000/api/revalidate?path=/&secret=secret-token

import { NextApiRequest, NextApiResponse } from "next";

export default async function GET(req: NextApiRequest, res: NextApiResponse) {
  if (req.query.secret !== process.env.TOKEN_SECRET) {
    res.status(401).send({
      message: "Invalid token",
    });
  }

  const path = req.query.path as string;

  await res.revalidate(path);

  return res.json({ revalidated: true });
}
