import {
  hashPassword,
  comparePassword,
} from './password.js';

const runTest = async () => {
  const password = '123456';

  const hash = await hashPassword(password);

  console.log('Original:', password);
  console.log('Hash:', hash);

  const correct = await comparePassword(password, hash);
  console.log('Correct password:', correct);

  const incorrect = await comparePassword('wrong123', hash);
  console.log('Wrong password:', incorrect);
};

runTest();