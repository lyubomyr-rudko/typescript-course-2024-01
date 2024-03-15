export {};
/* eslint-disable @typescript-eslint/no-unused-vars */
// Read the articlas from https://refactoring.guru/uk/design-patterns/behavioral-patterns
// Read about Chain of Responsibility, Iterator and Observer patterns
// Read about other behavioral patterns - Command, Mediator, Memento, State, Strategy, Template Method, Visitor

function excerciseA() {
  // Imagine you are writing an application that will help users to get a loan from a bank.
  // Use one of the Behavioral patterns to implement this requirement.
  // Local bank branch manager can approve loan up to 10000 if requested by a customer with a credit score of 700 or more
  // Regional bank manager can approve loan up to 50000 if requested by a customer with a credit score of 750 or more
  // HeadQuarters bank manager can approve loan up to 100000 if requested by a customer with a credit score of 800 or more
  // otherwise the loan is rejected
  // create a class for the loan request, with the following properties: customerName, creditScore, requestedAmount
  // create a class for the bank manager
  // create a class for the local bank manager
  // create a class for the regional bank manager
  // connect them using one of the Behavioral patterns, and call with several different loan requests
  interface Observer {
    update(request: LoanRequest): void;
  }

  interface Subject {
    attach(observer: Observer): void;
    detach(observer: Observer): void;
    notify(request: LoanRequest): void;
  }

  class LoanRequest implements Subject {
    private observers: Observer[] = [];
    constructor(
      public customerName: string,
      public creditScore: number,
      public requestedAmount: number,
    ) {}

    attach(observer: Observer): void {
      this.observers.push(observer);
    }

    detach(observer: Observer): void {
      const index = this.observers.indexOf(observer);
      if (index !== -1) {
        this.observers.splice(index, 1);
      }
    }

    notify(request: LoanRequest): void {
      this.observers.forEach((observer) => observer.update(request));
    }

    submitRequest(): void {
      this.notify(this);
    }
  }

  class BankManager implements Observer {
    constructor(private name: string) {}

    update(request: LoanRequest): void {
      if (this.canApproveLoan(request)) {
        console.log(
          `${this.name} approved the loan for ${request.customerName}`,
        );
      } else {
        console.log(`Loan for ${request.customerName} rejected.`);
      }
    }

    canApproveLoan(request: LoanRequest): boolean {
      return false;
    }
  }

  class LocalBankManager extends BankManager {
    canApproveLoan(request: LoanRequest): boolean {
      return request.requestedAmount <= 10000 && request.creditScore >= 700;
    }
  }

  class RegionalBankManager extends BankManager {
    canApproveLoan(request: LoanRequest): boolean {
      return request.requestedAmount <= 50000 && request.creditScore >= 750;
    }
  }

  class HeadQuartersBankManager extends BankManager {
    canApproveLoan(request: LoanRequest): boolean {
      return request.requestedAmount <= 100000 && request.creditScore >= 800;
    }
  }

  // Usage
  const request1 = new LoanRequest('John Doe', 780, 20000);
  const request2 = new LoanRequest('Alice Smith', 720, 15000);
  const request3 = new LoanRequest('Bob Johnson', 820, 75000);

  const localManager = new LocalBankManager('Local Bank Manager');
  const regionalManager = new RegionalBankManager('Regional Bank Manager');
  const headquartersManager = new HeadQuartersBankManager(
    'HeadQuarters Bank Manager',
  );

  request1.attach(localManager);
  request1.attach(regionalManager);
  request1.attach(headquartersManager);

  request2.attach(localManager);
  request2.attach(regionalManager);
  request2.attach(headquartersManager);

  request3.attach(localManager);
  request3.attach(regionalManager);
  request3.attach(headquartersManager);

  // Submit loan requests
  request1.submitRequest();
  request2.submitRequest();
  request3.submitRequest();
}

excerciseA();
