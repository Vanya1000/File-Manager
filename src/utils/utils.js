import fs from 'node:fs/promises';

export const isExistFile = async (path) => {
  try {
      await fs.access(path , fs.constants.F_OK);
      return true;
  } catch (error) {
      return false;
  }
}

export const filterByType = ({files, onlyDir, onlyFile}) => {
  if (onlyDir) {
    return files.filter((file) => file.isDirectory());
  }
  if (onlyFile) {
    return files.filter((file) => file.isFile());
  }
}

export const sortByName = (files) => {
  return files.sort((a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  });
}

export const splitBySpaceOrDoubleQuote = (str) => {
  const trimStr = str.toString().trim(); 
  const arr = [];
  let word = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      arr.push(word);
      word = '';
    } else if (str[i] === '"') {
      arr.push(word);
      word = '';
      i++;
      while (str[i] !== '"') {
        word += str[i];
        i++;
      }
      arr.push(word);
      word = '';
    } else {
      word += str[i];
    }
  }
  arr.push(word);
  return arr.filter((item) => item !== '');
};

export const colorizeInRed = (string) => `\x1b[91m${string} \x1b[0m`;
export const colorizeInGreen = (string) => `\x1b[92m${string} \x1b[0m`;
export const colorizeInBlue = (string) => `\x1b[94m${string} \x1b[0m`;