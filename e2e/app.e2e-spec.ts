import { Resume2Page } from './app.po';

describe('resume2 App', () => {
  let page: Resume2Page;

  beforeEach(() => {
    page = new Resume2Page();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
