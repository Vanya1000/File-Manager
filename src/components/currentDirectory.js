import { colorizeInBlue } from '../utils/utils.js';

const printCurrentDirectory = () => {
  console.log(colorizeInBlue(`You are currently in ${process.cwd()}`));
}

export default printCurrentDirectory;