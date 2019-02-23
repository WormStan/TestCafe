import { Selector } from 'testcafe'; // first import testcafe selectors


fixture `Getting Started Failed`// declare the fixture
    .page `https://devexpress.github.io/testcafe/example`  // specify the start page
    .beforeEach( async t => {
        /* test initialization code */
    })
    .afterEach( async t => {
        /* test finalization code */
    });

//then create a test and place your code there
test
    .before(
        async t => {
            /* test initialization code */
        }
    )
    .after(
        async t => {
            /* test finalization code */
        }
    )
    ('My failed test', async t => {
    
    await t
        .typeText('#developer-name', 'John Smith')
        .click('#submit-button')

        // Use the assertion to check if the actual header text is equal to the expected one
        .expect(Selector('#article-header').innerText).eql('Thank you, Stan!');

});