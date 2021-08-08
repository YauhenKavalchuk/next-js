import { socials } from './data/socials';

export default function handler(req, res) {
  console.log(req);
  if (req.method === 'GET') {
    res.status(200).json(socials);
  };
}
