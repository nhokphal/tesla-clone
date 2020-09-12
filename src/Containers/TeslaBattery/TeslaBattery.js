import React from 'react';
import '../../Containers/TeslaBattery.css';
import TeslaNotice from '../../Components/TeslaNotice/TeslaNotice';

class TeslaBattery extends React.Component {
  render() {
    return (
          <form className="tesla-battery">
          <h1>Range Per Charge</h1>
           <TeslaNotice />
          </form>
    )
  }
}
export default TeslaBattery;