import { MuseumPage } from './app.po';

describe('museum App', function() {
  let page: MuseumPage;

  beforeEach(() => {
    page = new MuseumPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
