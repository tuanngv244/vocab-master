import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig(() => {
  return {
    plugins: [
      react(),
      tailwindcss(),
      VitePWA({
        registerType: 'autoUpdate',
        includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'pwa-192x192.png', 'pwa-512x512.png'],
        manifest: {
          name: 'Vocab Master',
          short_name: 'Vocab Master',
          description: 'A sleek vocabulary learning app',
          theme_color: '#10b981',
          background_color: '#ffffff',
          display: 'standalone',
          icons: [
            {
              src: 'pwa-192x192.png',
              sizes: '192x192',
              type: 'image/png'
            },
            {
              src: 'pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png'
            },
            {
              src: 'pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'any maskable'
            }
          ]
        }
      }),
      {
        name: 'telemetry-cron-endpoint',
        configureServer(server) {
          server.middlewares.use('/api/cron-report', (req, res) => {
            if (req.method === 'POST') {
              let body = '';
              req.on('data', chunk => { body += chunk; });
              req.on('end', () => {
                try {
                  const data = JSON.parse(body);
                  console.log('\n=========================================');
                  console.log('📬 [CRON 4H] TELEMETRY REPORT RECEIVED');
                  console.log('⏰ Time:', new Date().toLocaleString('vi-VN'));
                  console.log('🎯 Recipient:', 'tuanngv24.4@gmail.com');
                  console.log('👤 User status:', data['TRẠNG THÁI NGƯỜI DÙNG'] || 'Guest');
                  console.log('📱 Device:', data['Loại thiết bị'], '|', data['Hệ điều hành (OS)'], '|', data['Trình duyệt (Browser)']);
                  console.log('📐 Screen:', data['Độ phân giải màn hình'], '| Viewport:', data['Kích thước Viewport hiển thị']);
                  console.log('📚 Current Lesson:', data['Chủ đề / Bài học cụ thể']);
                  console.log('=========================================\n');
                } catch {
                  console.log('[CRON 4H] Telemetry report received');
                }
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ ok: true, recipient: 'tuanngv24.4@gmail.com', time: Date.now() }));
              });
            } else {
              res.writeHead(405);
              res.end();
            }
          });
        }
      }
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
