var {Then} = require('cucumber')
const assert = require('assert')

Then(/^I should see "([^"]*)?" in the title$/, function (expectedValue) {
    assert.equal(browser.getTitle(), expectedValue + ' - Google Search')
})