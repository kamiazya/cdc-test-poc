
export class DogServiceClient {
  constructor(public url: string) {}


  public getMeDogs() {
    return fetch(
      `${this.url}/dogs`,
      { headers: {
          Accept: 'application/json'
        }
      },
    ).then(res => res.json());
  }

  public getMeCats() {
    return fetch(
      `${this.url}/cats?catId[]=2&catId[]=3`,
      { headers: {
          Accept: 'application/json'
        }
      },
    ).then(res => res.json());
  }
}
