import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), 'excuses.json'); // Path to the JSON file
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8')); // Read and parse the JSON
  res.status(200).json(data); // Send the JSON as a response
}
