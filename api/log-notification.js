export default function handler(req, res) {
  if (req.method === 'POST') {
    console.log('Received notification:', req.body);
    res.status(200).json({ message: 'Notification received' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
