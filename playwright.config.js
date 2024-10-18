const {PlaywrightTestConfig} = require ('@playwright/test');

const config = {
    retries: 1,
    timeout: 60000,
    
    use: {
        baseURL: "https://demoqa.com/",
        headless: true,
        viewport: {width: 1280, height: 720},
        video: "on",
        screenshot: "on"

    },

    projects: [
        {
            name: 'Chrome',
            use: {browserName: 'chromium'}
        },
        {
            name: 'Firefox',
            use: {browserName: 'firefox'}
        },
        {
            name: 'Webkit',
            use: {browserName: 'webkit'}
        }



    ]
}

module.exports = config;