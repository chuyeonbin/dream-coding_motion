import PageComponent from './page.js';

class App {
  private readonly page: PageComponent;
  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent();
    this.page.attachTo(appRoot);
  }
}

const app: App = new App(document.querySelector('.document')! as HTMLElement);

export default app;
