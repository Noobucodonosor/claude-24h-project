// api/github.ts
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Octokit } from '@octokit/rest';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Abilita CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    const octokit = new Octokit({
      auth: process.env.GITHUB_TOKEN
    });

    const { data } = await octokit.rest.repos.listForAuthenticatedUser({
      per_page: 100,
      sort: 'updated'
    });
    
    console.log(`Found ${data.length} repos`);
    
    res.status(200).json({ 
      repos: data.map(r => r.name),
      count: data.length 
    });
  } catch (error: any) {
    console.error('GitHub API Error:', error.message);
    res.status(500).json({ 
      error: 'Failed to fetch repos',
      details: error.message 
    });
  }
}