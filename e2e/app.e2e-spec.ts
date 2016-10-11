import { AskmePage } from './app.po';

describe('askme App', function() {
  let page: AskmePage;

  beforeEach(() => {
    page = new AskmePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
