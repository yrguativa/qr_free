import type { APIRoute } from 'astro';

const SITE_URL = process.env.SITE_URL ?? 'http://localhost:4321';

export const GET: APIRoute = () => {
	const robots = `User-agent: *
Allow: /
Disallow: /cdn-cgi/

Sitemap: ${SITE_URL}/sitemap-index.xml
`;
	return new Response(robots, {
		headers: {
			'Content-Type': 'text/plain; charset=utf-8',
		},
	});
};
