import open_url from '../Base/OpenUrl';
import login from '../Pages/LoginPAge';
describe('Organge HRM Site Test', () => {
  // class name objectName = new Classname
  // create object
  const url = new open_url();
  const logIn = new login();

  it('Test', () => {
    url.openUrl();
    logIn.logInprocess();
  });
});
