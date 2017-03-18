import { IronhackTtPage } from './app.po';

describe('ironhack-tt App', () => {
  let page: IronhackTtPage;

  beforeEach(() => {
    page = new IronhackTtPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
