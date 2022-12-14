import parseUserNameArg from './parseUserNameArg.js';

const noName = 'You dont pass username as argument. Consiqently, you will be greeted by default :('
const greetingNoName = 'Welcome to the File Manager, unknown!'

const greeting = () => {
  const name = parseUserNameArg();
  if (name) {
    console.log(`Welcome to the File Manager, ${name}!`);
  } else {
    console.log(noName);
    console.log(greetingNoName);
  }
};

export default greeting;