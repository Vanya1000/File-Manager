import { createReadStream } from 'fs';
import { resolve } from 'path';
import { pipeline } from 'stream/promises';
import { myWritable } from '../utils/castomWritableStream.js';

const catAction = async ([file]) => {
  const pathFile = resolve(file);
  const readableStream = createReadStream(pathFile);
  const writableStream = new myWritable();
  await pipeline(readableStream, writableStream);
};

export default catAction;
