import React from 'react';
import ReactDOM from 'react-dom'
import Card from './components/Card';

const App =()=> {
    return (
    
        <div>
            <div className="card-group">
                <Card cardTitle='Iphone' />
                    
                <Card cardTitle='Samsung' />

                <Card  cardTitle='Oppo'/>  
                        </div>
                    </div>
                    )
}

                    ReactDOM.render(

                    <App />,
                    document.getElementById('root')
                    );