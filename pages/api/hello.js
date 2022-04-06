// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const MongoClient = require('mongodb').MongoClient

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}
