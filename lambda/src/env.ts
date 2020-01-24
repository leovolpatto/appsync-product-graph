if (!['prod', 'dev', 'homol'].includes(process.env.ENV as string)) {
  throw new Error(`Invalid ENV=${process.env.ENV}, env must be homol, prod or dev`);
}

export function getConfig(configName: string): string {
  if (!process.env[configName]) {
    throw new Error(`Environmental variable ${configName} not set`);
  } else {
    return process.env[configName] as string;
  }
}

export const env = process.env.ENV as string;

interface AppConfig {

}

const PROD: AppConfig = {

};

const HOMOL: AppConfig = {

};

const DEV: AppConfig = {

};

function getConfigForEnv(): AppConfig {
  if (env === 'prod') {
    return PROD;
  } else if (env === 'homol') {
    return HOMOL;
  } else {
    return DEV;
  }
}

const config = getConfigForEnv();
export default config;
