import upAction from './upAction.js';
import cdAction from './cdAction.js';
import lsAction from './lsAction.js';

const actionRouter = (str) => {
  const [action, ...rest] = str.toString().trim().split(' ')
    switch (action) {
      case 'up':
        upAction();
        break;
      case 'cd':
        cdAction(rest);
        break;
      case 'ls':
        lsAction();
      default:
        console.log('Input invalid');
    }
};

export default actionRouter;