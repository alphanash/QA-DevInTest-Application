const {Given, Then} = require('cucumber');
const {By} = require('selenium-webdriver');
const World = require('../support/world');

Given(/^I go to the jobs page$/, () => World.goToJobsPage());

Then(/^I should see the navigation bar$/, async () => {
    return World.driver.findElement(By.id('primary-nav'));
});

Then(/^I should see the search field for (.*)$/, function (field) {
    return World.driver.findElement(By.name(field));
});

Then(/^I should see the sector link for (.*)$/, function (sector) {
    // I initially built this as a single array listing all the sectors, but this is not the cucumber way as it "hides" the sector details in the code. That's fine for Dev and technical QA's, but it's not ideal for non-technical people who may want to confirm all the correct sectors have been covered, so I moved them to the gherkin.
    // Additional note. These tests should ideally run headless. Spinning up web browsers is good for debugging, but horribly ineffecient for actually running the tests.
    World.driver.findElement(By.css("#main > div.band.band--primary.band--primary--third.cf > div > section > div > div > ul > li.facet-links__link.facet-links__link--(' + sector + ').lap-larger__item.column__item"));
});

Then(/^I should see the jobs blog$/, function () {
    return World.driver.findElement(By.css('#main > div.band.band--primary.band--primary--fourth.cf > div > div > div.grid-item.two-thirds.lap-one-whole.palm-one-whole'));
});

Then(/^I should see the featured jobs$/, function () {
    return World.driver.findElement(By.css('#main > div.band.band--primary.band--primary--fourth.cf > div > div > div.grid-item.one-third.lap-one-whole.palm-one-whole > section > div'));
});

Then(/^I should see the footer$/, function () {
    return World.driver.findElement(By.css('body > div.container.js-container > div:nth-child(7) > footer > div.wrapper.content > nav > ul'));
});