import { TipalsUiPage } from './app.po';

describe('tipals-ui App', function() {
  let page: TipalsUiPage;

  beforeEach(() => {
    page = new TipalsUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
