import { AppDataSource } from './ormconfig';

export const connect = async () => {
  await AppDataSource.initialize();
  return AppDataSource;
};
