import { writeFile } from "fs/promises";
import { resolve } from "path";

const addAction = async ([name]) => {
  const path = resolve(name);
  console.log(path);
  await writeFile(path, "", { flag: "wx", encoding: "utf8" });
};

export default addAction;
