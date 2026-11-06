/* eslint-disable no-undef */

describe("Login Form Tests", () => {
  beforeEach(() => {
    // Port of your local development server
    cy.visit("http://localhost:5173");
  });

  /* -------------------------------------------------------------
     a) Successful Form Submission Scenario
  ------------------------------------------------------------- */
  describe("a) Successful Form Submission", () => {
    it("should submit successfully and display the success page when all fields are valid", () => {
      // 1. Enter valid email and password
      cy.get("#email").type("test@example.com");
      cy.get("#password").type("Password123!");

      // 2. Accept terms
      cy.get("#check").check();

      // 3. Verify submit button is NOT disabled
      cy.get('button[type="submit"]').should("not.be.disabled");

      // 4. Click submit
      cy.get('button[type="submit"]').click();

      // 5. Verify success page content is displayed
      cy.contains("Login Successful!").should("be.visible");
      cy.contains("test@example.com").should("be.visible");
    });
  });

  /* -------------------------------------------------------------
     b) Invalid States and Validation Scenario
  ------------------------------------------------------------- */
  describe("b) Invalid States and Validation", () => {
    // 1. When only email is invalid
    it("should show 1 error message with correct text and keep button disabled when email is invalid", () => {
      cy.get("#email").type("invalid-email");

      // Exactly 1 error message should be displayed
      cy.get(".error-message").should("have.length", 1);

      // Verify correct error message text
      cy.get(".error-message").should(
        "contain.text",
        "Please enter a valid email address."
      );

      // Submit button must be disabled
      cy.get('button[type="submit"]').should("be.disabled");
    });

    // 2. When both email and password are invalid
    it("should show 2 error messages including password error and keep button disabled when both email and password are invalid", () => {
      cy.get("#email").type("invalid-email");
      cy.get("#password").type("123"); // Invalid short password

      // Exactly 2 error messages should be displayed
      cy.get(".error-message").should("have.length", 2);

      // Password error message should be visible
      cy.get(".error-message").should(
        "contain.text",
        "Password must be at least 8 characters"
      );

      // Submit button must be disabled
      cy.get('button[type="submit"]').should("be.disabled");
    });

    // 3. When email and password are valid but terms are not accepted
    it("should keep button disabled when terms are not accepted even if credentials are valid", () => {
      cy.get("#email").type("test@example.com");
      cy.get("#password").type("Password123!");

      // Checkbox is NOT checked

      // No validation error messages should exist
      cy.get(".error-message").should("not.exist");

      // Submit button must remain disabled
      cy.get('button[type="submit"]').should("be.disabled");
    });
  });
});