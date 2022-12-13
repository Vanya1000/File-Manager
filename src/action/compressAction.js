import { pipeline } from 'stream/promises';
import { createReadStream, createWriteStream } from 'fs';
import { resolve, parse, join } from 'path';
import { createBrotliCompress } from 'zlib';
import { successMessage, isExistFile } from '../utils/utils.js';

const compressAction = async ([pathSource, pathDist]) => {
  const pathSourceAbsolute = resolve(pathSource);
  const pathDistAbsolute = resolve(pathDist);

  const { base: baseSource, ext: extSource } = parse(pathSourceAbsolute);

  const {
    ext: extDist,
    root: rootDist,
    name: nameDist,
  } = parse(pathDistAbsolute);

  let pathDistFile;
  if (!extDist) {
    pathDistFile = join(pathDistAbsolute, `${baseSource}.br`);
    const isExistDistDir = await isExistFile(pathDistAbsolute);
    if (!isExistDistDir) throw new Error('Directory not found');
  } else {
    console.log('ext', extDist);
    extDist === '.br'
      ? (pathDistFile = join(rootDist, `${nameDist}${extSource}${'.br'}`))
      : (pathDistFile = join(`${pathDistAbsolute}.br`));
  }

  const isExistSourceFile = await isExistFile(pathSourceAbsolute);
  if (!isExistSourceFile) throw new Error('File not found');

  const isExistDistFile = await isExistFile(pathDistFile);
  if (isExistDistFile) throw new Error('File already exists');

  const readableStream = createReadStream(pathSourceAbsolute);
  const brotlyCompress = createBrotliCompress();
  const writableStream = createWriteStream(pathDistFile);
  await pipeline(readableStream, brotlyCompress, writableStream);
  successMessage('File success compressed');
};

export default compressAction;
