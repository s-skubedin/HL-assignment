import React from 'react';
import {connect} from 'react-redux';
import {fetchLocations} from './../actions/locationsActions';
import ApartmentTileView from "./ApartmentTileView";

class LocationsView extends React.Component {

  componentWillMount() {
    this.props.fetchLocations();
  }

  render() {
    let {locationList} = this.props;
    // if (!Object.keys(locations).length) {
    //     return <div>Loading...</div>
    // }
    console.log(this.props)
    return (
      <div className="container-list container-lg clearfix">
        <div className="col-12 float-left">
          <div className="view-apartment-list">
            
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  locationList: state.locationList.locations
});

export default connect(mapStateToProps, {fetchLocations})(LocationsView)