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
}).then(function()
{
    let clickOnAlgoPromise = waitAndClick("[data-automation='algorithms']", page);
    return clickOnAlgoPromise;
}).then(function()
{
    let clickOnWarmUpPromise = waitAndClick('input[value="warmup"]', page)
    return clickOnWarmUpPromise;
}).then(function()
{
    let waitFor3Seconds = page.waitForSelector(".challenge-submit-btn");
    return waitFor3Seconds;
}).then(function(){
    let allChallengesPromise = page.$$(".challenge-submit-btn");
    return allChallengesPromise;
}).then(function(questionsArr){
    console.log("questionArr length is : ", questionsArr.length);
    questionSolver(questionsArr[0]);
})
    


function waitAndClick(selector, cPage)
{
    return new Promise(function(resolve, reject)
    {
        let waitForModelPromise = cPage.waitForSelector(selector);
        waitForModelPromise.then(function()
        {
            let clickModal = cPage.click(selector);
            return clickModal;
        }).then(function()
        {
            resolve();
        }).catch(function(err){
            reject();
        })
    })
}


function questionSolver(question){
    return new Promise(function(resolve, reject){
        let questionWillBeClicked = question.click();
        return questionWillBeClicked;
    })
}