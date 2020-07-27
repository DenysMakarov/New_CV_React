import React from 'react';

import {CSSTransitionGroup } from 'react-transition-group' // ES6

class Test extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const arr = [1,2,3]
        const items = arr.map((el)=>(
            <div key={el} className="test_anim">
                {el}
            </div>
        ))

        return (
            <div>
                {/*<CSSTransitionGroup*/}
                {/*    transitionName="example"*/}
                {/*    // transitionAppear={true}*/}
                {/*    // transitionAppearTimeout={2000}*/}
                {/*    // transitionEnter={true}*/}
                {/*    // transitionLeave={true}*/}
                {/*    //*/}
                {/*    transitionEnterTimeout={500}*/}
                {/*    transitionLeaveTimeout={300}*/}
                {/*>*/}
                    {arr.map((el)=>(
                    <div key={el} className="test_anim">
                        {el}
                    </div>
                    ))   }
                {/*</CSSTransitionGroup>*/}

            </div>




        )
    }


}

export default Test