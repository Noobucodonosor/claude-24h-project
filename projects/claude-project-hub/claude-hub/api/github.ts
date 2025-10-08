import { Octokit } from '@octokit/rest';
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN
  });

  // Test: lista repositories
  const { data } = await octokit.rest.repos.listForAuthenticatedUser();
  
  res.json({ repos: data.map(r => r.name) });
}