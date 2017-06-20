import { Angular4ListsPage } from './app.po';

describe('angular4-lists App', () => {
  let page: Angular4ListsPage;

  beforeEach(() => {
    page = new Angular4ListsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
