import { readdir } from 'fs/promises';
import { sortByName, filterByType } from '../utils/utils.js';

const lsAction = async () => {
  const currentDir = process.cwd();
  const files = await readdir(currentDir, { withFileTypes: true });

  const onlySortFolders = sortByName(filterByType({files, onlyDir: true}));
  const onlySortFiles = sortByName(filterByType({files, onlyFile: true}));

  const table = [...onlySortFolders, ...onlySortFiles].map((dirent) => ({
    Name: dirent.name,
    Type: dirent.isFile() ? 'file' : 'directory',
  }));
  console.table(table);
};

export default lsAction;
