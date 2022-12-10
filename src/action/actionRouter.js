import upAction from './upAction.js';
import cdAction from './cdAction.js';
import lsAction from './lsAction.js';
import addAction from './addAction.js';
import rnAction from './rnAction.js';
import catAction from './catAction.js';
import cpAction from './cpAction.js';
import rmAction from './rmAction.js';
import mvAction from './mvAction.js';

const actionRouter = (str) => {
  const [action, ...rest] = str.toString().trim().split(' ')
    switch (action) {
      case 'up':
        upAction();
        break;
      case 'cd': //todo: check variant resolve path
        cdAction(rest);
        break;
      case 'ls':
        lsAction();
        break;
      case 'add':
        addAction(rest);
        break;
      case 'rn':
        rnAction(rest);
        break;
      case 'cat':
        catAction(rest);
        break;
      case 'cp':
        cpAction(rest);
        break;
      case 'rm':
        rmAction(rest);
        break;
      case 'mv':
        mvAction(rest);
        break;
      default:
        console.log('Input invalid');
    }
};

export default actionRouter;