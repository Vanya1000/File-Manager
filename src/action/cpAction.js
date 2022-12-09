import { createReadStream, createWriteStream } from 'fs';
import { join } from 'path';
import { pipeline } from 'stream/promises';
import printCurrentDirectory from '../components/currentDirectory.js';

const cpAction = async (fileName) => {
  const [nameSource, nameDestination] = fileName;
  const currentDir = process.cwd();
  const filePathSource = join(currentDir, nameSource);
  const filePathDestination = join(currentDir, nameDestination);
  try {
    const readableStream = createReadStream(filePathSource);
    const writableStream = createWriteStream(filePathDestination, {flags: 'wx'});
    await pipeline(readableStream, writableStream);
    printCurrentDirectory();
  } catch (error) {
    console.log('Operation failed');
  }
};

export default cpAction;