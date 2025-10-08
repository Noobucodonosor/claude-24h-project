import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Octokit } from '@octokit/rest';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  try {
    const octokit = new Octokit({
      auth: process.env.GITHUB_TOKEN
    });

    const { data } = await octokit.rest.repos.listForAuthenticatedUser();
    
    res.json({ repos: data.map(r => r.name) });
  } catch (error) {
    console.error('GitHub Error:', error);
    res.status(500).json({ error: 'Failed to fetch repos' });
  }
}