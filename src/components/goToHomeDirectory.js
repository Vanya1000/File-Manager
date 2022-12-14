import { homedir } from 'os'
import printCurrentDirectory from './currentDirectory.js';

export default function goToHomeDirectory() {
  process.chdir(homedir());
  printCurrentDirectory();
}