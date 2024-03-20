export {};

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

  enum CreditScoreLevel {
    LOCAL_BANK = 700,
    REGIONAL_BANK = 750,
    HEAD_QUARTERS_BANK = 800,
  }

  class LoanRequest {
    private creditScore!: CreditScoreLevel;
    private conclusion: string | null = null;

    private customerName!: string;
    private requestedAmount!: number;

    getCreditScore(): CreditScoreLevel {
      return this.creditScore;
    }

    setCreditScore(creditScore: CreditScoreLevel) {
      this.creditScore = creditScore;
    }

    getConclusion(): string | null {
      return this.conclusion;
    }

    setConclusion(conclusion: string) {
      this.conclusion = conclusion;
    }
  }

  interface IBankSevice {
    approveLoan(request: LoanRequest): void;
  }

  // create a class for the bank manager
  class BankManager implements IBankSevice {
    private handler!: IBankSevice;

    getHandler(): IBankSevice {
      return this.handler;
    }

    setHandler(handler: IBankSevice) {
      this.handler = handler;
    }

    approveLoan(request: LoanRequest) {
      this.handler.approveLoan(request);
    }
  }

  // create a class for the local bank manager
  class LocalBankManager implements IBankSevice {
    private next!: IBankSevice;

    getNext(): IBankSevice {
      return this.next;
    }

    setNext(next: IBankSevice) {
      this.next = next;
      return this;
    }

    approveLoan(service: LoanRequest) {
      if (service.getCreditScore() == CreditScoreLevel.LOCAL_BANK)
        service.setConclusion('LOCAL_BANK request approved');
      else if (this.next != null) this.next.approveLoan(service);
      else throw new Error('request rejected' + service.getCreditScore());
    }
  }

  // create a class for the regional bank manager
  class RegionalBankManager implements IBankSevice {
    private next!: IBankSevice;

    getNext(): IBankSevice {
      return this.next;
    }

    setNext(next: IBankSevice) {
      this.next = next;
      return this;
    }

    approveLoan(service: LoanRequest) {
      if (service.getCreditScore() == CreditScoreLevel.REGIONAL_BANK)
        service.setConclusion('REGIONAL_BANK request approved');
      else if (this.next != null) this.next.approveLoan(service);
      else throw new Error('request rejected' + service.getCreditScore());
    }
  }

  class HeadQuartersBankManager implements IBankSevice {
    private next!: IBankSevice;

    getNext(): IBankSevice {
      return this.next;
    }

    setNext(next: IBankSevice) {
      this.next = next;
      return this;
    }

    approveLoan(service: LoanRequest) {
      if (service.getCreditScore() == CreditScoreLevel.HEAD_QUARTERS_BANK)
        service.setConclusion('HEAD_QUARTERS_BANK request approved');
      else if (this.next != null) this.next.approveLoan(service);
      else throw new Error('request rejected' + service.getCreditScore());
    }
  }

  // connect them using one of the Behavioral patterns, and call with several different loan requests
  const bankManager = new BankManager();

  const localBankManager = new LocalBankManager();
  const regionalBankManager = new RegionalBankManager();
  const headQuartersBankManager = new HeadQuartersBankManager();

  bankManager.setHandler(localBankManager);
  localBankManager.setNext(regionalBankManager);
  regionalBankManager.setNext(headQuartersBankManager);

  let request: LoanRequest = new LoanRequest();
  request.setCreditScore(CreditScoreLevel.LOCAL_BANK);
  localBankManager.approveLoan(request);
  console.log(request.getConclusion());

  request = new LoanRequest();
  request.setCreditScore(CreditScoreLevel.REGIONAL_BANK);
  regionalBankManager.approveLoan(request);
  console.log(request.getConclusion());

  request = new LoanRequest();
  request.setCreditScore(CreditScoreLevel.HEAD_QUARTERS_BANK);
  headQuartersBankManager.approveLoan(request);
  console.log(request.getConclusion());
}

excerciseA();
