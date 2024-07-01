import dotenv from 'dotenv';

dotenv.config();

// interface Config {
//   PORT: number;
//   POOLING_MILLISECONDS: number;
//   MATH_URL: string | undefined;
// }

// const config : Config = {
const config = {
  PORT: parseEnvNumber(process.env.PORT, 3000),
  POOLING_MILLISECONDS: parseEnvNumber(process.env.POOLING_MILLISECONDS, 10000),
  MATH_URL: process.env.MATH_URL
};

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