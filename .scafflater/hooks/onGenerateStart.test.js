const onGenerateStart = require('./onGenerateStart');
const path = require('path');

test('Load Partial', async () => {
  // ARRANGE
  const context = {targetPath: path.resolve(__dirname, '..')};

  // ACT
  await onGenerateStart(context);

  // ASSERT
  expect(context.partials.length).toBeGreaterThan(0);
  expect(context.git.remote.origin.url).toBe(
    'https://github.com/chicoribas/scafflater-template.git'
  );
  expect(context.git.html_url).toBe(
    'https://github.com/chicoribas/scafflater-template'
  );
});
