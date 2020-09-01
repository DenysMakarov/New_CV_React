import React from "react"

function goToLink () {
    alert("This slider works as a library. You can connect it in your personal code where you want. Instructions included into folder 'LIBRARY' of Git link");
    window.location = "https://1985makarovdenis1985.github.io/New_CV_restaurant/dist/"
}

function Restaurant () {
    return (
        <div onClick={goToLink} className="block_of_works block_of_works_cover block_of_works_cover_restaurant">
            <div className="restaurant_block" data-name="Restaurant">
                <div className="restaurant_block_block_middle" data-name="Restaurant"/>
                <div className="restaurant_block_mobile" data-name="Restaurant"/>
            </div>
        </div>
    )
}

export default Restaurant