import React from 'react';
import Listing from './Listing';

function Listings({ allListings }) {
    return (
        <div>
            {
                Object.values(allListings).map((listing) => {
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
                })
            }
        </div>
    );
}

export default Listings;