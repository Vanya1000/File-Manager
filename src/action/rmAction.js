import { rm } from "fs/promises";
import { resolve } from "path";

const rmAction = async ([file]) => {
  const path = resolve(file);
  await rm(path);
};

export default rmAction;
