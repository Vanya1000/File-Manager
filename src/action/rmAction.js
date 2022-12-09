import { rm } from "fs/promises";
import { resolve } from "path";
import printCurrentDirectory from "../components/currentDirectory.js";

const rmAction = async (fileNameArg) => {
  try {
    if (fileNameArg.length === 0) throw new Error("No file name");
    const [name] = fileNameArg;
    const currentDir = process.cwd();
    const path = resolve(currentDir, name);

    await rm(path);
    printCurrentDirectory();
  } catch (error) {
    console.log("Operation failed");
  }
};

export default rmAction;
