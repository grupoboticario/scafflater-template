const onGenerateStart = require('./onGenerateStart')
const path = require('path')

test('Load Partial', async () => {
  // ARRANGE
  const context = { targetPath: path.resolve(__dirname, '..') }

  // ACT
  const result = await onGenerateStart(context)

  // ASSERT
  expect(result.partials.length).toBeGreaterThan(0)

})