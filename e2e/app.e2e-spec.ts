import { NgrxEgPage } from './app.po';

describe('ngrx-eg App', () => {
  let page: NgrxEgPage;

  beforeEach(() => {
    page = new NgrxEgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
