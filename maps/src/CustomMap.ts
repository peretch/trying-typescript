import { User } from './User';
import { Company } from './Company';

export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(idElement: string) {
    this.googleMap = new google.maps.Map(document.getElementById(idElement), {
      zoom: 2,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  public addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent(),
      });

      infoWindow.open(this.googleMap, marker);
    });
  }

  // addMarker bad example implementation (in two separate functions)
  // ---------- BEGIN -----------
  // ----- BAD CODE EXAMPLE -----
  // public addUserMarker(user: User): void {
  //   const maker = new google.maps.Marker({
  //     map: this.googleMap,
  //     position: {
  //       lat: user.location.lat,
  //       lng: user.location.lng,
  //     },
  //   });
  // }

  // public addCompanyMarker(company: Company): void {
  //   const maker = new google.maps.Marker({
  //     map: this.googleMap,
  //     position: {
  //       lat: company.location.lat,
  //       lng: company.location.lng,
  //     },
  //   });
  // }

  // addMarker other bad implementation implementation
  // public addMarker(mappable: User | Company): void {
  //   const maker = new google.maps.Marker({
  //     map: this.googleMap,
  //     position: {
  //       lat: mappable.location.lat,
  //       lng: mappable.location.lng,
  //     },
  //   });
  // }
  // ----- BAD CODE EXAMPLE -----
  // ----------- END ------------
}
