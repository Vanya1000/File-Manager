import upAction from './upAction.js';
import cdAction from './cdAction.js';
import lsAction from './lsAction.js';
import addAction from './addAction.js';
import rnAction from './rnAction.js';
import catAction from './catAction.js';
import cpAction from './cpAction.js';
import rmAction from './rmAction.js';
import mvAction from './mvAction.js';
import osAction from './osAction.js';
import hashAction from './hashAction.js';
import compressAction from './compressAction.js';
import decompressAction from './decompressAction.js';
import printCurrentDirectory from '../components/currentDirectory.js';
import { colorizeInRed, splitBySpaceOrDoubleQuote } from '../utils/utils.js';
import { INPUT_INVALID } from '../constants/index.js';

const mapAction = {
  'up': {
    args: 0,
    fn: upAction,
  },
  'cd': {
    args: 1,
    fn: cdAction,
  },
  'ls': {
    args: 0,
    fn: lsAction,
  },
  'add': {
    args: 1,
    fn: addAction,
  },
  'rn': {
    args: 2,
    fn: rnAction,
  },
  'cat': {
    args: 1,
    fn: catAction,
  },
  'cp': {
    args: 2,
    fn: cpAction,
  },
  'rm': {
    args: 1,
    fn: rmAction,
  },
  'mv': {
    args: 2,
    fn: mvAction,
  },
  'os': {
    args: 1,
    fn: osAction,
  },
  'hash': {
    args: 1,
    fn: hashAction,
  },
  'compress': {
    args: 2,
    fn: compressAction,
  },
  'decompress': {
    args: 2,
    fn: decompressAction,
  }
}

const actionRouter = async (str) => {
  if (!str) {
    console.log(colorizeInRed(INPUT_INVALID));
    return;
  }
  const [action, ...rest] = splitBySpaceOrDoubleQuote(str);

  const isExistCommand = Object.keys(mapAction).includes(action);
  const isRightCountArgs = rest.length >= mapAction[action].args;
  if (isExistCommand && isRightCountArgs) {
    try {
      await mapAction[action].fn(rest);
      printCurrentDirectory();
    } catch (error) {
      console.log(colorizeInRed('Operation failed'));
    }
  } else {
    console.log(colorizeInRed(INPUT_INVALID));
  };
};

export default actionRouter;