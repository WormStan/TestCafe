import { Selector } from "testcafe";

export class PageObject {
    developer_name_input = Selector('#developer-name');
    submit_button = Selector('#submit-button');
    article_header_text = Selector('#article-header');
}