import React from 'react';
import Select from 'react-select'
import ChartSelector from './component/ChartSelector';
import RealtimeChart from './component/RealtimeChart';
import logo from './css/images/litecoin.svg';
import Header from './component/Header';
import InformationBox from './component/InformationBox';
import IndicesChart from './component/IndicesChart';

const options = [
  { value: 'bitcoin', label: 'Bitcoin (BTC)' },
  { value: 'zcash', label: 'ZCash (ZEC)' },
  { value: 'litcoin', label: 'Litecoin (LTC)' },
  { value: 'ethernum', label: 'Ethernum (ETH)' },
];

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      selectedOption: "bitcoin",
    };
  }

  handleChange = (opt) => {
    this.setState({selectedOption: opt.value});
  }

	render() {

		return (
		<div className="app">
      <Header />
       <Select className="select"
               isSearchable="true"
               placeholder="Select cryptocurrency"
               options={options}
               value = {this.state.selectedOption} 
               onChange={this.handleChange}
         />
        <IndicesChart />
		</div>
		);
  }
}


//ChartSelector chartType = {this.state.selectedOption}/>
// InformationBox chosenCurrency={this.state.selectedOption}/>

export default App;