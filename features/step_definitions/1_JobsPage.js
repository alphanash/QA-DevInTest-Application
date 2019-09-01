const { Given, Then } = require('cucumber');
const { By } = require('selenium-webdriver');
const World = require('../support/world');

Given(/^I go to the jobs page$/, () => World.goToJobsPage());

Then(/^I should see the navigation bar$/, async () => {
  return World.driver.findElement(By.id('primary-nav'));
})

Then(/^I should see the search fields$/, function () {

});
Then(/^I should see the sector lists$/, function () {

});
Then(/^I should see the jobs blog$/, function () {

});
Then(/^I should see the featured jobs$/, function () {

});
Then(/^I should see the footer$/, function () {

});