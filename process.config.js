module.exports = {
  apps: [
    {
      name: "ULTRAGEAR",
      cwd: "./",
      script: "./server.js",
      watch: "false",
      env_production: {
        NODE_ENV: "production",
      },
      env_development: {
        NODE_ENV: "development",
      },
      instances: 1,
      exec_mode: "cluster",
    },
  ],
};
