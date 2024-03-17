export {};

// Read the articles from https://refactoring.guru/uk/design-patterns/behavioral-patterns
// Read about Mediator, Template Method and Command patterns
// Read about remaining behavioral patterns - Memento, State, Strategy, Visitor

function exerciseA() {
  // Imagine you are writing an application that will help users to gather documents for a visa application.
  // Usually the visa application requires many steps to complete, but the steps can have different details depending on the visa type
  // Use one of the Behavioral patterns to implement this requirement.
  // Note - there are 11 steps in the visa application process with different details for each step
  // would be good idea to keep that grouping in mind when you are choosing the pattern
  class VisaApplication {
    public prepareDocuments() {
      this.step1();
      this.step2();
      this.step3();
      this.step4();
      this.step5();
      this.step6();
      this.step7();
      this.step8();
      this.step9();
      this.step10();
      this.step11();
    }
    protected step1(): void {
      // step 1 - get the local passport copy
      console.log('step 1 - get the local passport copy');
      console.log(
        'step 1a - go to the copy office and get the local passport copy',
      );
      console.log('step 1b - get the local passport copy notarized');
    }
    protected step2(): void {
      console.log('step 2 - get the police clearance certificate');
      console.log('step 2a - go to the police station');
      console.log('step 2b - write an application');
      console.log('step 2c - pay the fees');
      console.log('step 2d - provide the documents copies');
      console.log('step 2e - pass the documents verification');
      console.log('step 2f - wait for the certificate receipt');
    }
    protected step3(): void {
      console.log('step 3 - get the bank statement');
      console.log('step 3a - go to the bank');
      console.log('step 3b - request the bank statement');
      console.log('step 3c - pay the fees');
    }
    protected step4(): void {
      console.log('step 4 - get the employment letter');
      console.log('step 4a - go to the employer');
      console.log('step 4b - request the employment letter');
      console.log('step 4c - wait for the employment letter');
    }
    protected step5(): void {
      console.log('step 5 - get the tax returns');
      console.log('step 5a - go to the tax office');
      console.log('step 5b - request the tax returns');
      console.log('step 5c - pay the fees');
      console.log('step 5d - wait for the tax returns document');
    }
    protected step6(): void {
      console.log('step 6 - get the property documents');
      console.log('step 6a - go to the property office');
      console.log('step 6b - request the property documents');
      console.log('step 6c - provide utility bills');
      console.log('step 6d - wait for the property documents');
    }
    protected step7(): void {
      console.log('step 7 - get the invitation letter');
      console.log('step 7a - go to the embassy');
      console.log('step 7b - request the invitation letter');
      console.log('step 7c - wait for the invitation letter');
    }
    protected step8(): void {
      console.log('step 8 - get the travel insurance');
      console.log('step 8a - go to the insurance company');
      console.log('step 8b - request the travel insurance');
      console.log('step 8c - provide doctor certificate');
      console.log('step 8d - wait for the travel insurance paper and print it');
    }
    protected step9(): void {
      console.log('step 9 - get the flight reservation');
      console.log('step 9a - go to the travel agency');
      console.log('step 9b - request the flight reservation');
      console.log('step 9c - pay the fees');
      console.log('step 9d - wait for the flight reservation');
      console.log('step 9e - print the flight reservation');
    }
    protected step10(): void {
      console.log('step 10 - get the hotel reservation');
      console.log('step 10a - go to the hotel');
      console.log('step 10b - request the hotel reservation');
      console.log('step 10c - pay the fees');
      console.log(
        'step 10d - wait for the hotel reservation and print the confirmation',
      );
    }
    protected step11(): void {
      console.log('step 11 - get the visa application form');
      console.log('step 11a - go to the embassy');
      console.log('step 11b - request the visa application form');
      console.log('step 11c - fill the form');
      console.log('step 11d - wait for the visa application form');
    }
  }

  // Extend the VisaApplication class to implement the pattern
  // create three classes that will extend the VisaApplication class
  // 1. WorkVisaApplication - this class will have a different implementation for step 5 and step 6
  // 2. TouristVisaApplication - this class will have a different implementation for step 7 and step 8
  // 3. StudentVisaApplication - this class will have a different implementation for step 4 and step 5
  class WorkVisaApplication extends VisaApplication {
    protected step5(): void {
      console.log('WorkVisaApplication has another realization of step5');
    }
    protected step6(): void {
      console.log('WorkVisaApplication has another realization of step6');
    }
  }
  class TouristVisaApplication extends VisaApplication {
    protected step7(): void {
      console.log('TouristVisaApplication has another realization of step7');
    }
    protected step8(): void {
      console.log('TouristVisaApplication has another realization of step8');
    }
  }
  class StudentVisaApplication extends VisaApplication {
    protected step4(): void {
      console.log('StudentVisaApplication has another realization of step4');
    }
    protected step5(): void {
      console.log('StudentVisaApplication has another realization of step5');
    }
  }
  const visaApplication = new VisaApplication();
  visaApplication.prepareDocuments();
  const workVisaApp = new WorkVisaApplication();
  workVisaApp.prepareDocuments();
  const touristVisaApp = new TouristVisaApplication();
  touristVisaApp.prepareDocuments();
  const studentVisaApp = new StudentVisaApplication();
  studentVisaApp.prepareDocuments();
}

exerciseA();
