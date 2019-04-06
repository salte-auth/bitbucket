import { SalteAuth } from '@salte-auth/salte-auth';
import { Redirect } from '@salte-auth/redirect';
import { Bitbucket } from '../src/bitbucket';

const auth = new SalteAuth({
  providers: [
    new Bitbucket({
      clientID: '6WazW6ujNqLS9kB4C4',
      responseType: 'code'
    })
  ],

  handlers: [
    new Redirect({
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
