import { pipeline } from 'stream/promises';
import { createReadStream, createWriteStream } from 'fs';
import { resolve, parse, join } from 'path';
import { createBrotliDecompress } from 'zlib';
import { successMessage, isExistFile } from '../utils/utils.js';

const decompressAction = async ([pathSource, pathDist]) => {
  const pathSourceAbsolute = resolve(pathSource);
  const pathDistAbsolute = resolve(pathDist);
  const { name, ext: extSource } = parse(pathSourceAbsolute);
  const {
    ext: extDist,
    root: rootDist,
    name: nameDist,
    base: baseDist,
  } = parse(pathDistAbsolute);

  let pathDistFile;
  if (!extDist) {
    pathDistFile = join(pathDistAbsolute, `${name}`);
    const isExistDistDir = await isExistFile(pathDistAbsolute);
    if (!isExistDistDir) {
      pathDistFile = join(rootDist, `${baseDist}.${name.split('.').at(-1)}`);
    }
  } else {
    pathDistFile = join(`${pathDistAbsolute}`);
  }

  if (extSource !== '.br') throw new Error('Invalid file extension');

  const isExistSourceFile = await isExistFile(pathSourceAbsolute);
  if (!isExistSourceFile) throw new Error('File not found');

  const isExistDistFile = await isExistFile(pathDistFile);
  if (isExistDistFile) throw new Error('File already exists');

  const readableStream = createReadStream(pathSourceAbsolute);
  const brotlyDecompress = createBrotliDecompress();
  const writableStream = createWriteStream(pathDistFile);
  await pipeline(readableStream, brotlyDecompress, writableStream);
  successMessage('File success decompressed');
};

export default decompressAction;
