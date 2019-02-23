const createTestCafe = require('testcafe');
const fs = require('fs')


/** 
 * Paramters Initialization 
 */
let case_list = ['./HelloTestCafe/failedTest.e2e.spec.ts', './HelloTestCafe/passedTest.e2e.spec.ts'];
let browser_list = ['chrome:headless', /*'firefox'*/ ];


createTestCafe('localhost', 1337, 1338)
    .then(tc => {
        testcafe = tc;
        const runner = testcafe.createRunner();
        const stream = fs.createWriteStream('reports/report.html');

        return runner
            .src(case_list)
            .browsers(browser_list)
            .concurrency(2)
            .screenshots('reports/screenshots/', true, '${DATE}_${TIME}/${USERAGENT}/${FIXTURE}.png')
            .video('reports/videos/', {
                singleFile: false,
                failedOnly: false,
                pathPattern: '${DATE}_${TIME}/${USERAGENT}/${FIXTURE}.mp4'
            }, {
                r: 30,
                aspect: '4:3'
            })
            .reporter('html', stream)
            .run({
                skipJsErrors: true,
                selectorTimeout: 10000,
                assertionTimeout: 7000,
                pageLoadTimeout: 10000,
                speed: 1,
                stopOnFirstFail: false
            })
    })
    .then((failed) => {
        console.log('Tests failed: ' + failed);
        testcafe.close();
    })
    .catch((err) => {
        console.log(err);
    })