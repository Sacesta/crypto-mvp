import { Buffer } from 'buffer';

const handler = async (req, res) => {
  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const projectId = process.env.IPFS_PROJECT_ID;
  const projectSecret = process.env.API_KEY_SECRET;

  // Return empty auth if credentials are not set (graceful degradation)
  if (!projectId || !projectSecret) {
    return res.status(200).json({ data: '' });
  }

  const auth = `Basic ${Buffer.from(`${projectId}:${projectSecret}`).toString('base64')}`;

  res.status(200).json({ data: auth });
};

export default handler;
