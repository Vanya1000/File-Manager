import goToHomeDirectory from './components/goToHomeDirectory.js';
import greeting from './components/greeting.js';
import initializeReadLine from './components/InitializeReadLine.js';

const startApp = () => {
  greeting();
  initializeReadLine();
  goToHomeDirectory();
};

startApp();