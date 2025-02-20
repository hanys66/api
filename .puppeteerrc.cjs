/**
 * @type {import("puppeteer").Configuration}
 */
module.exports = {
    executablePath: "C:\\Users\\hanyshaker\\.cache\\puppeteer\\chrome\\win64-133.0.6943.98\\chrome-win64\\chrome.exe",
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
    // Download Chrome (default `skipDownload: false`).
    chrome: {
        skipDownload: false,
    },
    // Download Firefox (default `skipDownload: true`).
    firefox: {
        skipDownload: false,
    },
};