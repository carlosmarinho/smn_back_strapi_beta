module.exports = {
  apps : [{
    name: 'smn-back-beta',
    cwd: '/home/soumaisniteroi/apps_nodejs/smn_back_strapi_beta',
    script: 'npm',
    args: 'start',
    env: {
      NODE_ENV: 'production',
      DATABASE_HOST: '/home/soumaisniteroi/apps_nodejs/smn_back_strapi_beta', // database Endpoint under 'Connectivity & Security' tab
      DATABASE_PORT: '27017',
      DATABASE_NAME: 'soumaisniteroi01',  // DB name under 'Configuration' tab
      DATABASE_USERNAME: 'soumaisniteroi01', // default username
      DATABASE_PASSWORD: 'sm#20nit27er18',
    },
  }],
};
