import dotenv from 'dotenv';

dotenv.config();

interface Config {
  PORT: number;
  POOLING_MILLISECONDS: number;
  TASK_URL: string;
}

const config : Config = {
  PORT: parseEnvNumber(process.env.PORT, 3000),
  POOLING_MILLISECONDS: parseEnvNumber(process.env.POOLING_MILLISECONDS, 10000),
  TASK_URL: parseEnvString(process.env.TASK_URL)
};

function parseEnvString(value: string | undefined): string {
  if (value === undefined) {
    throw new Error('Environment variable must be defined');
  }
  return value;
}

function parseEnvNumber(value: string | undefined, defaultValue: number): number {
  if (value === undefined) {
    return defaultValue;
  }
  const parsed = parseInt(value, 10);
  if (isNaN(parsed)) {
    throw new Error(`Invalid number format for environment variable: ${value}`);
  }
  return parsed;
}

export default config;