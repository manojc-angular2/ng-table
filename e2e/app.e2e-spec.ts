import { NgTablePage } from './app.po';

describe('ng-table App', () => {
  let page: NgTablePage;

  beforeEach(() => {
    page = new NgTablePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
