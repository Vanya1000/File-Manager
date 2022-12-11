import { pipeline } from 'stream/promises';
import { createReadStream, createWriteStream } from 'fs';
import { resolve, parse, join } from 'path';
import { createBrotliDecompress } from 'zlib';
import { isExistFile } from '../utils/utils.js';
import printCurrentDirectory from '../components/currentDirectory.js';

const decompressAction = async ([pathSource, pathDist]) => {
  try {
    const pathSourceAbsolute = resolve(pathSource);
    const pathDistAbsolute = resolve(pathDist);
    const { name, ext} = parse(pathSourceAbsolute);
    console.log(parse(pathSourceAbsolute));

    const pathDistFile = join(pathDistAbsolute, name);

    if (ext !== '.br') throw new Error('Invalid file extension');

    const isExistSourceFile = await isExistFile(pathSourceAbsolute);
    if (!isExistSourceFile) throw new Error('File not found');

    const isExistDistDir = await isExistFile(pathDistAbsolute);
    if (!isExistDistDir) throw new Error('Directory not found');

    const isExistDistFile = await isExistFile(pathDistFile);
    if (isExistDistFile) throw new Error('File already exists');

    const readableStream = createReadStream(pathSourceAbsolute);
    const brotlyDecompress = createBrotliDecompress();
    const writableStream = createWriteStream(pathDistFile);
    await pipeline(readableStream, brotlyDecompress, writableStream);
    printCurrentDirectory();
  } catch (error) {
    console.log(error);
    console.log('Operation failed');
  }
};

export default decompressAction;