import React from "react"


function goToLink (e) {
    window.location = "https://1985makarovdenis1985.github.io/New_CV_Game/dist/index.html"
}

function GameBlock () {
    return (
        <div onClick={goToLink} className="block_of_works block_of_works_cover block_of_works_cover_game " >
            <div className="game_block" data-name="Game">
                <div className="game_block_cards" data-name="Game"></div>
                <div className="game_block_cards" data-name="Game"></div>
                <div className="game_block_cards" data-name="Game"></div>
                <div className="game_block_cards" data-name="Game"></div>
                <div className="game_block_cards" data-name="Game"></div>
                <div className="game_block_cards" data-name="Game"></div>
                <div className="game_block_cards" data-name="Game"></div>
                <div className="game_block_cards" data-name="Game"></div>
            </div>
        </div>
    )
}

export default GameBlock