import React from 'react';
import cryptocurrencydata from '../cryptocurrencydata';
import Cryprocurrency from './Cryptocurrency';

class InformationBox extends React.Component {

    constructor(props){
        super(props);
        this.state= {
            data: cryptocurrencydata,
        };
    };

    render() {

        return (
            <div>
                { Object.keys(this.state.data).map(key => (
                    <Cryprocurrency 
                    key={key} 
                    index = {key}
                    details={this.state.data[key]} 
                    />
                ))}
            </div>
        );
    }
}

export default InformationBox;