import fs from 'node:fs/promises';

export const isExistFile = async (path) => {
  try {
      await fs.access(path , fs.constants.F_OK);
      return true;
  } catch (error) {
      return false;
  }
}