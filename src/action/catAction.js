import { createReadStream } from 'fs';
import { join } from 'path';
import { pipeline } from 'stream/promises';
import { Writable } from 'stream';
import { EOL } from 'os';
import printCurrentDirectory from '../components/currentDirectory.js';

class myWritable extends Writable {
  constructor(opt) {
    super(opt);
  }

  _write(chunk, encoding, callback) {
    console.log(chunk.toString() + EOL);
    callback();
  }
}

const catAction = async (fileName) => {
  const [file] = fileName;
  const currentDir = process.cwd();
  const pathFile = join(currentDir, file);
  try {
    const readableStream = createReadStream(pathFile);
    const writableStream = new myWritable();
    await pipeline(readableStream, writableStream);
    printCurrentDirectory();
  } catch (error) {
    console.log('Operation failed');
  }
};

export default catAction;