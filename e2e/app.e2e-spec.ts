import { SurajPage } from './app.po';

describe('suraj App', function() {
  let page: SurajPage;

  beforeEach(() => {
    page = new SurajPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
