import {FETCH_LOCATIONS} from "./types";
import gql from "graphql-tag";
import client from './../ApolloClient'

export const fetchLocations = () => dispatch => {
  client.query({
    query: gql`
    {
      apartments(active: true) {
        items {
          _id
          owner {
          _id
            email
          } 
          title
          location {
            title
          }
          size
          price
          amenities
          images
        }
      }
    }`
})
.then(locations => dispatch({
  type: FETCH_LOCATIONS,
  payload: locations.data
}));
};


