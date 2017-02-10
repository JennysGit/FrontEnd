import { MyresumePage } from './app.po';

describe('myresume App', function() {
  let page: MyresumePage;

  beforeEach(() => {
    page = new MyresumePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
