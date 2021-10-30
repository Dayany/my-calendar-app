describe("renders initial page", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("should render correctly", () => {
    cy.get("#root").should("exist");
  });
  it("should change calendar to a selected date from time picker", () => {
    cy.get(".MuiOutlinedInput-input").clear();
    cy.get(".MuiOutlinedInput-input").type("12/11/2021");
    cy.get(":nth-child(4) > .MuiTypography-root").should(
      "have.text",
      "December, 2021"
    );
  });
  it("reminders sidebar should not contain any reminders", () => {
    cy.get("[data-testid=MenuIcon] > path").click();
    cy.get(".css-12paacn-MuiTypography-root").should(
      "have.text",
      "No Reminders for this date."
    );
  });

  it("should add reminder to sidebar when adding a new reminder", () => {
    cy.get(".css-a0vo9r-MuiGrid-root > div > .MuiButton-root").click();
    cy.get("#title").clear();
    cy.get("#title").type("Test");
    cy.get("#description").clear();
    cy.get("#description").type("Test");
    cy.get(":nth-child(1) > .MuiRadio-root > .PrivateSwitchBase-input").check();
    cy.get(".MuiBox-root > .MuiButton-root").click();
    cy.get(".MuiBox-root > .MuiButtonBase-root").should("have.text", "1 Test");
  });
  it("should limit title to have a maximum length of 30 characters", () => {
    cy.get(".css-a0vo9r-MuiGrid-root > div > .MuiButton-root").click();
    cy.get("#title").clear();
    cy.get("#title").type("1234567890123456789012345678901234");
    cy.get("#description").clear();
    cy.get("#description").type("testing char limit on title");
    cy.get(":nth-child(1) > .MuiRadio-root > .PrivateSwitchBase-input").check();
    cy.get(".MuiBox-root > .MuiButton-root").click();
    cy.get(".MuiBox-root > .MuiButtonBase-root > .MuiTypography-h6").should(
      "have.text",
      " 123456789012345678901234567890"
    );
  });
  it("should edit a reminder when the title is changed", () => {
    cy.get(".css-a0vo9r-MuiGrid-root > div > .MuiButton-root").click();
    cy.get("#title").clear();
    cy.get("#title").type("Testing edit");
    cy.get("#description").clear();
    cy.get("#description").type("testing edit");
    cy.get(":nth-child(1) > .MuiRadio-root > .PrivateSwitchBase-input").check();
    cy.get(".MuiBox-root > .MuiButton-root").click();
    cy.get(".MuiBox-root > .MuiButtonBase-root > .MuiTypography-h6").should(
      "have.text",
      " Testing edit"
    );
    cy.get(".MuiBox-root > .MuiButtonBase-root").click();
    cy.get("#title").clear();
    cy.get("#title").type("Success edit");
    cy.get(".MuiGrid-spacing-xs-3 > :nth-child(1) > .MuiButton-root").click();
    cy.get(".MuiBox-root > .MuiButtonBase-root > .MuiTypography-h6").should(
      "have.text",
      " Success edit"
    );
  });
  it("should be able to delete a created reminder", () => {
    cy.get(".css-a0vo9r-MuiGrid-root > div > .MuiButton-root").click();
    cy.get("#title").clear();
    cy.get("#title").type("Testing Delete");
    cy.get("#description").clear();
    cy.get("#description").type("delete");
    cy.get(".MuiFormGroup-root > :nth-child(1) > .MuiTypography-root").click();
    cy.get(":nth-child(1) > .MuiRadio-root > .PrivateSwitchBase-input").check();
    cy.get(".MuiBox-root > .MuiButton-root").click();
    cy.get(".MuiBox-root > .MuiButtonBase-root").should("be.visible");
    cy.get(".MuiBox-root > .MuiButtonBase-root").click();
    cy.get(":nth-child(2) > .MuiButton-root").click();
    cy.get(".css-12paacn-MuiTypography-root").should(
      "have.text",
      "No Reminders for this date."
    );
  });
});
