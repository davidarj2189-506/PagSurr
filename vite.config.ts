import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import { defineConfig, loadEnv, Plugin } from 'vite';
import sitemap from 'vite-plugin-sitemap';

function scanFolder(folderName: string, urlPrefix: string) {
  const dirPath = path.resolve(process.cwd(), 'public', folderName);
  if (!fs.existsSync(dirPath)) return [];
  const files = fs.readdirSync(dirPath);
  const exts = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif', '.gif', '.svg']);
  const rotations = ['-rotate-2', 'rotate-2', '-rotate-1', 'rotate-1.5', 'rotate-1', '-rotate-2'];
  const tapeStyles = [
    'top-[-8px] left-1/2 -translate-x-1/2 -rotate-1',
    'top-[-8px] right-1/4 rotate-2',
    'top-[-8px] left-1/3 -rotate-2',
    'top-[-8px] left-1/2 -translate-x-1/2 rotate-1'
  ];

  return files
    .filter(f => exts.has(path.extname(f).toLowerCase()))
    .map((f, idx) => {
      const full = path.join(dirPath, f);
      const stat = fs.statSync(full);
      const cleanName = path.parse(f).name.replace(/^[0-9]+[-_]?/, '').replace(/[-_]/g, ' ');
      const title = cleanName.charAt(0).toUpperCase() + cleanName.slice(1);
      return {
        id: f,
        name: f,
        url: `${urlPrefix}/${f}`,
        title,
        captionEn: `${title} • Nosara, Playa Guiones`,
        captionEs: `${title} • Nosara, Playa Guiones`,
        date: new Date(stat.mtimeMs).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        size: stat.size,
        mtime: stat.mtimeMs,
        category: (f.toLowerCase().includes('kid') || f.toLowerCase().includes('nino')) 
          ? 'kids' 
          : (f.toLowerCase().includes('fam') ? 'family' : 'moments'),
        rotation: rotations[idx % rotations.length],
        tapeStyle: tapeStyles[idx % tapeStyles.length]
      };
    })
    .sort((a, b) => b.mtime - a.mtime);
}

function syncManifests() {
  try {
    const galeria = scanFolder('galeria', '/galeria');
    const header = scanFolder('header', '/header');
    fs.writeFileSync(path.resolve(process.cwd(), 'public/galeria.json'), JSON.stringify(galeria, null, 2));
    fs.writeFileSync(path.resolve(process.cwd(), 'public/header.json'), JSON.stringify(header, null, 2));
  } catch (err) {
    console.error('Error syncing manifests:', err);
  }
}

function publicMediaPlugin(): Plugin {
  return {
    name: 'public-media-plugin',
    buildStart() {
      syncManifests();
    },
    configureServer(server) {
      syncManifests();

      server.middlewares.use((req, res, next) => {
        const url = req.url ? req.url.split('?')[0] : '';

        // GET /api/gallery or /api/galeria
        if (req.method === 'GET' && (url === '/api/gallery' || url === '/api/galeria')) {
          const images = scanFolder('galeria', '/galeria');
          res.setHeader('Content-Type', 'application/json');
          res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
          res.end(JSON.stringify(images));
          return;
        }

        // GET /api/header
        if (req.method === 'GET' && url === '/api/header') {
          const images = scanFolder('header', '/header');
          res.setHeader('Content-Type', 'application/json');
          res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
          res.end(JSON.stringify(images));
          return;
        }

        next();
      });
    }
  };
}

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [
      publicMediaPlugin(),
      react(),
      tailwindcss(),
      sitemap({
        hostname: 'https://firstpeaksurf.com',
        dynamicRoutes: [
          '/',
          '/classes',
          '/classes/kids',
          '/classes/family',
          '/classes/private',
          '/about',
          '/booking',
          '/contact',
          '/faq',
          '/gallery',
          '/blog',
        ],
      }),
    ],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
