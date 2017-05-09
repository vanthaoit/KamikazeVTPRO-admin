import { KamikazeVTPROAdminPage } from './app.po';

describe('kamikaze-vtpro-admin App', () => {
  let page: KamikazeVTPROAdminPage;

  beforeEach(() => {
    page = new KamikazeVTPROAdminPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
