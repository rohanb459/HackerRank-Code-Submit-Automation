const puppeteer = require("puppeteer");
const logInLink = `https://www.hackerrank.com/auth/login`;
const userEmail = `xateg54742@wowcg.com`;
const userPassword = `Rohan@123`;
let browserOpenPromise = puppeteer.launch(
    {
        headless: false,
        defaultViewport: null,
        args : ["--start-maximized"]
    }
)
browserOpenPromise.then(function(browser){
    let browserNewPage = browser.newPage();
    return browserNewPage;
}).then(function(newTab)
{
    page = newTab;
    let hackerrankOpenPromise = newTab.goto(logInLink);
    return hackerrankOpenPromise;
}).then(function(){
    let emailIsEntered = page.type("#input-1", userEmail, {delay: 50});
    return emailIsEntered;
}).then(function(){
    let passwordIsEntered = page.type("#input-2", userPassword, {delay: 50});
    return passwordIsEntered;
}).then(function()
{
    let loginButtonIsPressed = page.click("button[type='submit']");
    return loginButtonIsPressed;
})