module.exports = {
  apps: [
    {
      name: 'kora-app',
      script: 'npm',
      args: 'run dev:sandbox',
      env: {
        NODE_ENV: 'development',
        PORT: 3000
      },
      watch: false,
      instances: 1,
      exec_mode: 'fork'
    }
  ]
}
