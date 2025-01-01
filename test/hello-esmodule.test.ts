import test from 'node:test';
import assert from 'node:assert';

import say from '../src/internal-esmodule.js';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
test('Success test', async (t) => {
  assert.strictEqual(say(), 'Hello, Internal ES Module!');
});
