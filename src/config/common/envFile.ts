export const envFile = (): string => {
  return process.env.NODE_ENV ? `.env.${process.env.NODE_ENV}` : `.env`;
};
