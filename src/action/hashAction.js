import { pipeline } from "stream/promises";
import { createReadStream } from "fs";
import { resolve } from "path";
import { myWritable } from "../utils/castomWritableStream.js";
const { createHash } = await import("crypto");

const hashAction = async ([fileName]) => {
  const pathFile = resolve(fileName);
  const readableStream = createReadStream(pathFile);
  const hash = createHash("sha256");
  const writableStream = new myWritable();
  await pipeline(readableStream, hash.setEncoding("hex"), writableStream);
};

export default hashAction;
