export class UserError extends Error {
    errorCode: number;
    errorMessage: string;
    constructor(error?: Error) {
      super();
      this.errorCode = 400;
      this.errorMessage = error?.message || "An error occurred";
    }
  }
  
  export class InvalidUser extends UserError {
    constructor() {
      super();
      this.errorCode = 401;
      this.errorMessage = "User is not logged in";
    }
  }
  
  export class InvalidContent extends UserError {
    constructor() {
      super();
      this.errorCode = 404;
      this.errorMessage = "Content is not loaded";
    }
  }
  
  export class InvalidCredentials extends UserError {
    constructor() {
      super();
      this.errorCode = 400;
      this.errorMessage = "Missing credentials";
    }
  }
  