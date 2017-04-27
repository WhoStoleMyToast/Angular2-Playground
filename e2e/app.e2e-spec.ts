import { NarutoPage } from './app.po';

describe('naruto App', () => {
  let page: NarutoPage;

  beforeEach(() => {
    page = new NarutoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
