import React from 'react';
import Listing from './Listing';

class Listings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listings: []
        }
    }
 
    handleSubmit = async () => {
        const url = '/housing';
        await fetch(url)
        	.then(response => response.json(),
            	error => console.log('An error occurred: ', error))
			.then(json => this.setState({listings: json.listings}));
    }

	componentDidMount() {
		this.handleSubmit();
	}

    render () {
        var allListings = this.state.listings
		console.log("attempt 2");
        return (
            <div>
                {
                    allListings !== undefined && allListings !== "" ?
                    allListings.map((listing) => {
						console.log(listing);
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
                    }) : <div/>
                }
            </div>
        );
    }
}

export default Listings;
