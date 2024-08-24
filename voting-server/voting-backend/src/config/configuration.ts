const getRequiredEnvVar = (envName: string) => {
    const value = process.env[envName];
    if (value == null || value === '') {
      throw new Error(`Required env variable ${envName} is missing`);
    }
    return value;
  };
  
  export const configs = {
    database: {
      host: getRequiredEnvVar('MYSQL_HOST'),
      port: parseInt(getRequiredEnvVar('MYSQL_PORT'), 10),
      user: getRequiredEnvVar('MYSQL_USER'),
      db: getRequiredEnvVar('MYSQL_DB'),
      password: getRequiredEnvVar('MYSQL_PASSWORD'),
    },
    appOrigin: getRequiredEnvVar('APP_ORIGIN'),
    // encryptionSecretKey: getRequiredEnvVar('ENCRYPTION_SECRET_KEY'),
    // jwtSecret: getRequiredEnvVar('JWT_SECRET'),
    // internalAuthToken: getRequiredEnvVar('INTERNAL_AUTH_TOKEN'),
    // isProduction: process.env.NODE_ENV === 'production',
  };
  