var {Given} = require('cucumber')

Given(/^I am on Google$/, function () {
    browser.url('https://www.google.com/')
})