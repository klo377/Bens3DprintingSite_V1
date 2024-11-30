export const theme = {
  colors: {
    red: {
      primary: '#FF4500',
      dark: '#8B0000',
      light: '#FF6347'
    },
    dark: {
      primary: '#333333',
      secondary: '#666666',
      background: '#121316'
    }
  },
  gradients: {
    primary: 'bg-gradient-to-br from-red-900 via-red-800 to-red-900/90',
    hero: 'bg-gradient-to-br from-red-900/95 via-dark-900/90 to-dark-900/80',
    card: 'bg-gradient-to-br from-dark-800/90 to-dark-900/90',
    grid: `
      bg-[linear-gradient(0deg,rgba(139,0,0,0.05)1px,transparent_1px),
      linear-gradient(90deg,rgba(139,0,0,0.05)1px,transparent_1px)]
      bg-[size:20px_20px]
    `
  },
  shadows: {
    sm: '0 2px 4px rgba(139,0,0,0.1)',
    md: '0 4px 8px rgba(139,0,0,0.15)',
    lg: '0 8px 16px rgba(139,0,0,0.2)',
    glow: '0 0 20px rgba(255,69,0,0.4)'
  },
  transitions: {
    default: 'all 0.3s ease',
    slow: 'all 0.5s ease',
    fast: 'all 0.15s ease'
  }
};