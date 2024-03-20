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
  // create a class for the bank manager
  // create a class for the local bank manager
  // create a class for the regional bank manager
  // connect them using one of the Behavioral patterns, and call with several different loan requests

    class LoanRequest{
        constructor(
            public customerName: string,
            public creditScore: number,
            public requestedAmount: number,
        ) {}
    }

    interface BankManager {
        setNextManager(manager: BankManager): void;
        processRequest(request: LoanRequest): void;
    }

    class LocalBankManager implements BankManager {
        private nextManager?: BankManager;

        setNextManager(manager: BankManager): void {
            this.nextManager = manager;
        }

        processRequest(request: LoanRequest): void {
            if (request.requestedAmount <= 10000 && request.creditScore >= 700) {
                console.log(`Local bank manager approved loan for ${request.customerName}`);
            } else {
                this.nextManager?.processRequest(request);
            }
        }
    }

    class RegionalBankManager implements BankManager {
        private nextManager?: BankManager;

            setNextManager(manager: BankManager): void {
                this.nextManager = manager;
            }

            processRequest(request: LoanRequest): void {
                if (request.requestedAmount <= 50000 && request.creditScore >= 750) {
                console.log(`Regional bank manager approved loan for ${request.customerName}`);
            } else {
                this.nextManager?.processRequest(request);
            }
        }
    }

    class HeadquartersBankManager implements BankManager {
        private nextManager?: BankManager;

        setNextManager(manager: BankManager): void {
            this.nextManager = manager;
        }

        processRequest(request: LoanRequest): void {
            if (request.requestedAmount <= 100000 && request.creditScore >= 800) {
                console.log(`Headquarters bank manager approved loan for ${request.customerName}`);
            } else {
                this.nextManager?.processRequest(request);
            }
        }
    }

    const localManager = new LocalBankManager();
    const regionalManager = new RegionalBankManager();
    const headquartersManager = new HeadquartersBankManager();

    localManager.setNextManager(regionalManager);
    regionalManager.setNextManager(headquartersManager);


    const requests: LoanRequest[] = [
        new LoanRequest("Alice", 720, 8000),
        new LoanRequest("Bob", 780, 25000),
        new LoanRequest("Charlie", 810, 120000)
    ];

    requests.forEach(request => {
        console.log(`Processing loan request for ${request.customerName}`);
        localManager.processRequest(request);
    });

}

excerciseA();
