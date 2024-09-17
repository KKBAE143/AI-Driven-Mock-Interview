/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://neon-db_owner:jLm0kOrYeWi3@ep-royal-thunder-a5unpf32.us-east-2.aws.neon.tech/neon-db?sslmode=require',
    }
  };