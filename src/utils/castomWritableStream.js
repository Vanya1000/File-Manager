import { Writable } from 'stream';
import { EOL } from 'os';

export class myWritable extends Writable {
  constructor(opt) {
    super(opt);
  }

  _write(chunk, encoding, callback) {
    console.log(chunk.toString() + EOL);
    callback();
  }
}