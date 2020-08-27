import React from "react"

function goToLink (e) {
    window.location = "http://www.codester.com/index.php?url=items/preview/20183/magicslider-javascript-css-html"
}

function SliderBlock () {
    return (
        <div className="block_of_works block_of_works_cover block_of_works_cover_slider" data-name="Magic Slider">
            <div className="slider_block" data-name="Magic Slider">
            </div>
        </div>
    )
}

export default SliderBlock