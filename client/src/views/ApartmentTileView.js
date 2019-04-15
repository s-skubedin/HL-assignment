import React from 'react';
import ApartmentAmentityView from "./ApartmentAmentityView";

export default class ApartmentTileView extends React.Component {

  render() {
    let {apartment} = this.props;
    let url = '/apartments/' + apartment._id;
    let image = 'http://localhost:5000/images/apartments/' + apartment.images[0];

    return (
      <div className="view-apartment-item">
        <div className="view-apartment-item-content">
          <a target ="_blank" href={url}>
            <div className="listing-image">
              <div className="media-cover" style={{backgroundImage: `url(${image})`, backgroundPosition: 'center', backgroundSize: 'cover'}}></div>
              <div className="price-overlay">
                <span>{apartment.price} €</span>
                <span className="price-overlay-monat">
                <span className="prive-overlay-monat-text">/ Monat</span>
                </span>
              </div>
            </div>
            <div className="listing-details-container">
              <div className="listing-details">
                  <span className="text-truncate text-first-capitalize">{apartment.title}</span>
                <div className="apt-size-text text-truncate">
                  <span>{apartment.size} m²</span>
                </div>
                <div className="amenities-container">
                  <div className="amenities-text text-truncate">
                    <ApartmentAmentityView apartment={apartment} />
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    )
  }
}
