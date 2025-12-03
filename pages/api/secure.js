const handler = async (req, res) => {
  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // No auth needed for self-hosted IPFS
  res.status(200).json({ data: '' });
};

export default handler;
