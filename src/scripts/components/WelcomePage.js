import React from 'react';
import {Link} from 'react-router-component';

const styles = {
  wrap: {
    backgroundColor: 'rgb(254,226,128)',
    height: '600px',
    overflow: 'hidden',
    width:'100%',
    display:'flex'
  }
};

const WelcomePage = React.createClass({
  render() {
    return (
      <div style={styles.wrap}>
        <div>
          <img src='http://ext.pimg.tw/pangde007/1397149685-2832457338.png' style={{flex:1}}/><br/>
            <Link href='/inventory'>存貨管理</Link>
        </div>

        <div>
          <img src='http://mrdonut.co.ke/wp-content/uploads/2015/05/original-glazed.png' style={{height:'300px',width:'300px',flex:1}}/><br/>
            <Link href='/marketing'>行銷策略</Link>
        </div>
      </div>
    )
  }
});

module.exports = WelcomePage;
