import * as fs from 'fs/promises';
import * as path from 'path';
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
// ********* Lesson 19 *********
// Behavioral Design Patterns

function lesson19() {
  // - Strategy
  function strategyDemo() {
    interface UploadResult {
      success: boolean;
      message: string;
    }

    interface UploadStrategy {
      checkPermissions(): Promise<boolean>;
      upload(
        filePath: string,
        name: string,
        content: string,
      ): Promise<UploadResult>;
      checkSuccess(): Promise<boolean>;
    }

    /**
     * Strategy to upload a file to a local directory.
     */
    class LocalUpload implements UploadStrategy {
      public checkPermissions(): Promise<boolean> {
        return new Promise((resolve) => {
          resolve(true);
        });
      }
      public upload(
        filePath: string,
        name: string,
        content: string,
      ): Promise<UploadResult> {
        return new Promise((resolve, reject) => {
          const result: UploadResult = {
            success: true,
            message: 'Uploaded to local storage',
          };

          fs.writeFile(path.join(__dirname, filePath, name), content)
            .then(() => {
              resolve(result);
            })
            .catch((e) => {
              result.success = false;
              result.message = 'Error uploading to local storage';
              reject(result);
            });
        });
      }
      public checkSuccess(): Promise<boolean> {
        return new Promise((resolve) => {
          resolve(true);
        });
      }
    }

    /**
     * This is only a mock implementation of the upload strategy.
     * It is not a real strategy, but it is enough for the example.
     */
    class AWSUpload implements UploadStrategy {
      public checkPermissions(): Promise<boolean> {
        return new Promise((resolve) => {
          resolve(true);
        });
      }
      public upload(
        filePath: string,
        name: string,
        content: string,
      ): Promise<UploadResult> {
        return new Promise((resolve, reject) => {
          const result: UploadResult = {
            success: true,
            message: 'Uploaded to AWS storage',
          };

          setTimeout(() => {
            resolve(result);
          }, 1000);
        });
      }
      public checkSuccess(): Promise<boolean> {
        return new Promise((resolve) => {
          resolve(true);
        });
      }
    }

    class UploaderService {
      private strategy: UploadStrategy;

      constructor(strategy: UploadStrategy) {
        this.strategy = strategy;
      }

      public setStrategy(strategy: UploadStrategy) {
        this.strategy = strategy;
      }

      /**
       * The UploaderService delegates some work to the Strategy object instead of
       * implementing multiple versions of the algorithm on its own.
       *
       */
      public async uploadFile(
        filePath: string,
        name: string,
        content: string,
      ): Promise<UploadResult> {
        const permission = await this.strategy.checkPermissions();
        if (!permission) {
          throw new Error("You don't have permissions to upload");
        }

        const result = await this.strategy.upload(filePath, name, content);

        const success = await this.strategy.checkSuccess();
        if (!success) {
          throw new Error('Upload failed');
        }

        return result;
      }
    }

    /**
     * I'm creating to different strategies to upload a file to different places.
     */
    const localUpload = new LocalUpload();
    const awsUpload = new AWSUpload();

    const uploaderService = new UploaderService(localUpload);

    uploaderService
      .uploadFile('/', 'Output.txt', 'Hello World')
      .then((result) => {
        console.log(result);
      });
    // ususaly the client is in another file, so all changes are made in the client
  }
  strategyDemo();

  // - Visitor
  function visitorDemo() {
    interface Router {
      // Visitable
      sendData(data: string): void;

      acceptData(data: string): void;

      accept(v: RouterVisitor): void;
    }

    class DLinkRouter implements Router {
      sendData(data: string) {
        console.log(`DLinkRouter: sendData ${data}`);
      }

      acceptData(data: string) {
        console.log(`DLinkRouter: acceptData ${data}`);
      }

      accept(v: RouterVisitor) {
        v.visit(this);
      }
    }

    class LinkSysRouter implements Router {
      sendData(data: string) {
        console.log(`LinkSysRouter: sendData ${data}`);
      }

      acceptData(data: string) {
        console.log(`LinkSysRouter: acceptData ${data}`);
      }

      accept(v: RouterVisitor) {
        v.visit(this);
      }
    }

    class TPLinkRouter implements Router {
      sendData(data: string) {
        console.log(`TPLinkRouter: sendData ${data}`);
      }

      acceptData(data: string) {
        console.log(`TPLinkRouter: acceptData ${data}`);
      }

      accept(v: RouterVisitor) {
        v.visit(this);
      }
    }

    interface RouterVisitor {
      visit(router: Router): void;
    }

    class LinuxConfigurator implements RouterVisitor {
      visit(router: Router) {
        if (router instanceof TPLinkRouter) {
          this.visitTPLinkRouter(router);
        } else if (router instanceof DLinkRouter) {
          this.visitDLinkRouter(router);
        } else if (router instanceof LinkSysRouter) {
          this.visitLinkSysRouter(router);
        }
      }

      private visitDLinkRouter(router: DLinkRouter) {
        console.log('DLinkRouter Configuration for Linux complete !!');
      }

      private visitTPLinkRouter(router: TPLinkRouter) {
        console.log('TPLinkRouter Configuration for Linux complete !!');
      }

      private visitLinkSysRouter(router: LinkSysRouter) {
        console.log('LinkSysRouter Configuration for Linux complete !!');
      }
    }

    class WindowsConfigurator implements RouterVisitor {
      visit(router: Router) {
        if (router instanceof TPLinkRouter) {
          this.visitTPLinkRouter(router);
        } else if (router instanceof DLinkRouter) {
          this.visitDLinkRouter(router);
        } else if (router instanceof LinkSysRouter) {
          this.visitLinkSysRouter(router);
        }
      }

      private visitDLinkRouter(router: DLinkRouter) {
        console.log('DLinkRouter Configuration for Windows complete !!');
      }

      private visitTPLinkRouter(router: TPLinkRouter) {
        console.log('TPLinkRouter Configuration for Windows complete !!');
      }

      private visitLinkSysRouter(router: LinkSysRouter) {
        console.log('LinkSysRouter Configuration for Windows complete !!');
      }
    }

    // How to use?
    class VisitorTest {
      static test() {
        let windowsConfigurator: WindowsConfigurator;
        let linuxConfigurator: LinuxConfigurator;
        let dlink: DLinkRouter;
        let tplink: TPLinkRouter;
        let linksys: LinkSysRouter;

        function setUp() {
          windowsConfigurator = new WindowsConfigurator();
          linuxConfigurator = new LinuxConfigurator();

          dlink = new DLinkRouter();
          tplink = new TPLinkRouter();
          linksys = new LinkSysRouter();
        }

        function testDlink() {
          dlink.accept(windowsConfigurator);
          dlink.accept(linuxConfigurator);
        }

        function testTPLink() {
          tplink.accept(windowsConfigurator);
          tplink.accept(linuxConfigurator);
        }

        function testLinkSys() {
          linksys.accept(windowsConfigurator);
          linksys.accept(linuxConfigurator);
        }

        setUp();

        testDlink();

        testLinkSys();

        testTPLink();
      }
    }
  }
  visitorDemo();

  // - State
  function stateDemo() {
    interface PackageState {
      updateState(context: DeliveryContext): void;
    }

    class Acknowledged implements PackageState {
      //Singleton
      private static instance: Acknowledged = new Acknowledged();

      private constructor() {}

      public static getInstance(): Acknowledged {
        return Acknowledged.instance;
      }

      //Business logic and state transition
      updateState(context: DeliveryContext) {
        console.log('Package is acknowledged !!');
        context.setCurrentState(Shipped.getInstance());
      }
    }

    class Shipped implements PackageState {
      //Singleton
      private static instance: Shipped = new Shipped();

      constructor() {}

      public static getInstance(): Shipped {
        return Shipped.instance;
      }

      //Business logic and state transition
      updateState(context: DeliveryContext) {
        console.log('Package is shipped !!');
        context.setCurrentState(InTransition.getInstance());
      }
    }

    class InTransition implements PackageState {
      //Singleton
      private static instance: InTransition = new InTransition();

      private constructor() {}

      public static getInstance(): InTransition {
        return InTransition.instance;
      }

      //Business logic and state transition
      updateState(context: DeliveryContext) {
        console.log('Package is in transition !!');
        context.setCurrentState(OutForDelivery.getInstance());
      }
    }

    class OutForDelivery implements PackageState {
      //Singleton
      private static instance: OutForDelivery = new OutForDelivery();

      private constructor() {}

      public static getInstance(): OutForDelivery {
        return OutForDelivery.instance;
      }

      //Business logic and state transition
      updateState(context: DeliveryContext) {
        console.log('Package is out of delivery !!');
        context.setCurrentState(Delivered.getInstance());
      }
    }

    class Delivered implements PackageState {
      //Singleton
      private static instance: Delivered = new Delivered();

      private constructor() {}

      public static getInstance() {
        return Delivered.instance;
      }

      //Business logic
      updateState(context: DeliveryContext) {
        console.log('Package is delivered!!');
      }
    }

    class DeliveryContext {
      constructor(
        private packageId: string,
        private currentState?: PackageState,
      ) {
        if (!currentState) {
          this.currentState = Acknowledged.getInstance();
        }
      }

      getCurrentState(): PackageState | undefined {
        return this.currentState;
      }

      setCurrentState(currentState: PackageState) {
        this.currentState = currentState;
      }

      getPackageId(): string {
        return this.packageId;
      }

      setPackageId(packageId: string) {
        this.packageId = packageId;
      }

      update() {
        if (this.currentState) this.currentState.updateState(this);
      }
    }

    // How to use?

    class StateTest {
      static test() {
        const ctx: DeliveryContext = new DeliveryContext('Test123');

        ctx.update();
        ctx.update();
        ctx.update();
        ctx.update();
        ctx.update();
      }
    }
  }
  stateDemo();

  // - Memento
  function mementoDemo() {
    class Article {
      constructor(
        private id: number,
        private title: string,
        private content?: string,
      ) {}

      setId(value: number) {
        this.id = value;
      }

      setTitle(value: string) {
        this.title = value;
      }

      setContent(value: string) {
        this.content = value;
      }

      createMemento(): ArticleMemento {
        return new ArticleMemento(this.id, this.title, this.content);
      }

      restore(m: ArticleMemento) {
        this.id = m.getId();
        this.title = m.getTitle();
        this.content = m.getContent();
      }

      toString(): string {
        return (
          'Article [id=' +
          this.id +
          ', title=' +
          this.title +
          ', content=' +
          this.content +
          ']'
        );
      }
    }

    class ArticleMemento {
      constructor(
        private id: number,
        private title: string,
        private content?: string,
      ) {}

      getId(): number {
        return this.id;
      }

      getTitle(): string {
        return this.title;
      }

      getContent(): string {
        return this.content || '';
      }
    }

    // How to use?
    class MementoTest {
      static test() {
        const article: Article = new Article(1, 'My Article');
        article.setContent('ABC');
        console.log(article);

        const memento: ArticleMemento = article.createMemento();
        article.setContent('123');
        console.log('Content updated to 123');
        console.log(article);

        article.restore(memento);
        console.log('Content restored');
        console.log(article);
      }
    }
  }
  mementoDemo();
}
lesson19();

const test = 'test';
export default test;
