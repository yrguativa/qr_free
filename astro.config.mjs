// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// URL canónica del sitio. Cambia SITE_URL al desplegar (ej: https://tudominio.com)
// para que el sitemap y los canonical apunten al dominio real.
const SITE_URL = process.env.SITE_URL ?? 'http://localhost:4321';
// Base path para subdirectorios (ej: GitHub Pages en /qr_free/).
const BASE = process.env.ASTRO_BASE ?? '/';

// https://astro.build/config
export default defineConfig({
	site: SITE_URL,
	base: BASE,
	integrations: [
		sitemap({
			i18n: {
				defaultLocale: 'es',
				locales: {
					es: 'es',
					en: 'en',
				},
			},
		}),
	],
});
