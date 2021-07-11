import React from 'react';
import ReactDOM from 'react-dom'

import Card from './components/Card';
import Collapse from './components/Collapse';

const App = () => {
    return (

        <div className='contanier'>
            <div className="card-group w-100">
                <div className='row'>
                    <div className='col'>
                        <Collapse href="collapseExample1">

                            <Card cardTitle='Card Tiitle'
                                cardText='lorem'
                                updatedTime='last Update 1 min '
                                image='https://picsum.photos/id/1/200/300' />

                        </Collapse>

                    </div>
                    <div className='col'>
                        <Collapse href="collapseExample2">

                            <Card cardTitle='Card Tiitle'
                                cardText='lorem'
                                updatedTime='last Update 1 min '
                                image='https://picsum.photos/id/2/200/300' />

                        </Collapse>

                    </div>
                    <div className='col'>
                        <Collapse href="collapseExample3">

                            <Card cardTitle='Card Tiitle'
                                cardText='lorem'
                                updatedTime='last Update 1 min '
                                image='https://picsum.photos/id/3/200/300' />

                        </Collapse>

                    </div>
                </div>
            </div>











        </div>
    )
}

ReactDOM.render(

    <App />,
    document.getElementById('root')
);