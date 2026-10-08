import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.bartwrights.boxing',
  appName: 'Bartwrights Boxing',
  webDir: '.',
  bundledWebRuntime: false,
  server: {
    cleartext: true
  }
};

export default config;
