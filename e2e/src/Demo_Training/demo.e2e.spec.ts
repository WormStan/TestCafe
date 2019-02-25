import { PageObject } from "./demo.e2e.po";
import { PageData } from "./demo.e2e.data";

const p_Obj = new PageObject();
const p_Data = new PageData();

fixture `Getting Started`// declare the fixture
    .page `https://devexpress.github.io/testcafe/example`  // specify the start page

//then create a test and place your code there
test
    ('it should show my input developer name', async t => {
    
    await t
        .typeText(p_Obj.developer_name_input, p_Data.developer_name_text)
        .click(p_Obj.submit_button)

        // Use the assertion to check if the actual header text is equal to the expected one
        .expect(p_Obj.article_header_text.innerText).eql(p_Data.article_header_text);
});