export const sleep = (value: number): Promise<void> => new Promise((resolve) => setTimeout(resolve, value));

export const getEnvVariable = (key: string) => import.meta.env[`VITE_${key}`];
