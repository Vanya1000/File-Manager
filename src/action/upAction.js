import { resolve } from 'path';

const upAction = () => {
  process.chdir(resolve('..'));
}

export default upAction;