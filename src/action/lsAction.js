import { readdir } from 'fs/promises';
import printCurrentDirectory from '../components/currentDirectory.js';

function File(name, type) {
  this.Name = name;
  this.Type = type;
}

const lsAction = async () => {
  try {
    const currentDir = process.cwd();
    const files = await readdir(currentDir, { withFileTypes: true });
    const onlySortFolders = files.filter((dirent) => dirent.isDirectory()).sort((a,b) => {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });
    const onlySortFiles = files.filter((dirent) => dirent.isFile()).sort((a,b) => {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });
    const table = [...onlySortFolders, ...onlySortFiles].map((dirent) => {
      return new File(dirent.name, dirent.isFile() ? 'file' : 'directory');
    });
    console.table(table);
    printCurrentDirectory();
  } catch (error) {
    console.log('Operation failed');
  }
};

export default lsAction;