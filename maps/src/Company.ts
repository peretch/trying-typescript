import faker from 'faker';
import { Mappable } from './CustomMap';

export class Company implements Mappable {
  companyName: string;
  companyPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.companyName = faker.company.companyName();
    this.companyPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `<strong>${this.companyName}</strong> <em>"${this.companyPhrase}"</em>`;
  }
}

// Default exports are conventionals in typescript
// export default Company;
