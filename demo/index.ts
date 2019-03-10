import { SalteAuth } from '@salte-auth/salte-auth';
import { Bitbucket } from '../src/bitbucket';
import { NewTab } from './new-tab';

const auth = new SalteAuth({
  providers: [
    new Bitbucket({
      clientID: 'b44780ca7678681180c9',
      responseType: 'code'
    })
  ],

  handlers: [
    new NewTab({
      default: true
    })
  ]
});

const button = document.createElement('button');
button.innerHTML = `Login`;
button.addEventListener('click', () => {
  auth.login('bitbucket');
});

document.body.appendChild(button);
