var {When} = require('cucumber')

When(/^I search for "([^"]*)?"$/, function (input) {
    browser.setValue('#lst-ib', input)
    browser.waitForExist('.lsb', 1000)
    browser.click('.lsb')
})