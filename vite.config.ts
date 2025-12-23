import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  base: '/Simtope-Website-Redesign/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        lpwa: resolve(__dirname, 'lpwa.html'),
        satellite: resolve(__dirname, 'satellite.html'),
        iotEsim: resolve(__dirname, 'iot-esim.html'),
        simManagement: resolve(__dirname, 'sim-management.html'),
        deployment: resolve(__dirname, 'deployment-services.html'),
        contact: resolve(__dirname, 'contact.html'),
        company: resolve(__dirname, 'company.html'),
      },
    },
  },
});