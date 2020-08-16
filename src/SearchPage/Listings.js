import React from 'react';
import Listing from './Listing';

class Listings extends React.Component {
    handleSubmit = async () => {
        const url = '/housing';
        return await fetch(url)
        .then(response => response.json(),
            error => console.log('An error occurred: ', error))
        .then(json => json.listings);
    }

    constructor(props) {
        super(props);
        this.state = {
            listings: []
        }
        this.setState({listings : this.handleSubmit})
    } 

    render () {
        var allListings = this.state.listings
        console.log(allListings);
        return (
            <div>
                {
                    allListings.listings !== undefined && allListings.listings !== "" ?
                    allListings.listings.map((listing) => {
                        return (
                            <div>
                                <Listing
                                    title={listing.title}
                                    description={listing.description}
                                    price={listing.price}
                                    location={listing.location}
                                    length={listing.length}
                                    squareFootage={listing.squareFootage}
                                    roommateInfo={listing.roommateInfo}
                                />
                                <br />
                            </div>
                        );
                    }) :
                    null
                }
            </div>
        );
    }
}

export default Listings;