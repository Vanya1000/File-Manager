import { join, sep } from 'path';

const cdAction = ([path]) => {
  if (path.includes(':')) {
    path.length === 2 ? process.chdir(path + sep) : process.chdir(path);
    return;
  }
  const currentDirectory = process.cwd();
  const newDirectory = join(currentDirectory, path);
  process.chdir(newDirectory);
};

export default cdAction;
