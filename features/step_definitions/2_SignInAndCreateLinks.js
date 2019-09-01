const {Given, Then, When} = require('cucumber');
const {By} = require('selenium-webdriver');
const World = require('../support/world');

Given(/^I am not signed\-in$/, function () {
try
{
    //Looks for the "sign Out" element. If it exists, then the browser cookies are cleared then refreshed.
    //This is obviously a non-test as the test browser always starts with an empty cache... I'm just putting this here to show that I know how to build for such a scenario (and potentially use it the other way around).
    const SignOut = require (World.driver.findElement(By.css('#secondary-nav > ul > li.togglable-nav__item.secondary-nav__item.secondary-nav--jobseekers.jobseekers.jobseekers-nav > ul > li.togglable-nav__item.togglable-nav__item--last.jobseekers__item.jobseekers__item--sign-out')));
    if(SignOut(true))
    {
        // This call doesn't seem to work for some reason. SO instead of clearing cookies and refreshing the page, I'll just use the webdriver to click "sign out". Less robust and I'm not happy about it, but it's what I can do in the time available.
        // World.driver.manage().deleteAllCookies();
        World.driver.findElement(By.css('#secondary-nav > ul > li.togglable-nav__item.secondary-nav__item.secondary-nav--jobseekers.jobseekers.jobseekers-nav > ul > li.togglable-nav__item.togglable-nav__item--last.jobseekers__item.jobseekers__item--sign-out')).click();
    }}
    catch (NoSuchElementException)
    {
    }
});


When(/^I click on (.*)$/, function (link) {
    const SignIn = '#secondary-nav > ul > li.togglable-nav__item.secondary-nav__item.secondary-nav--jobseekers.jobseekers.jobseekers-nav > ul > li.togglable-nav__item.jobseekers__item.jobseekers__item--sign-in\n';
    const CreateAccount = '#secondary-nav > ul > li.togglable-nav__item.secondary-nav__item.secondary-nav--jobseekers.jobseekers.jobseekers-nav > ul > li.togglable-nav__item.togglable-nav__item--last.jobseekers__item.jobseekers__item--create-account';

    World.driver.findElement(By.css(link).click());
});


Then(/^I am taken to the (.*) page$/, function (page) {
    const Logon = '.../logon/';
    const Register = '.../register/';

    return World.driver.getCurrentUrl();
    console.assert(currenturl, page );
});