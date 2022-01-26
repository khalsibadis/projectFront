export class AuthServiceService {
  IsAuth = false;
  root = false;
  constructor() { }
  signIn() {
    return new Promise(
      (resolve , reject) => {
        setTimeout(
          () => {
            this.IsAuth = true ;
            resolve(true);
          }, 2000
        );
      }
    );
  }
  rootking() {
    this.root = true;
  }
  signOut() {
    this.IsAuth = false;
  }

}
