import React from 'react';
import {NavigatableMixin} from 'react-router-component';

// Components

const styles = {
  header: {
    backgroundColor: 'rgb(254,179,129)',
    borderBottom: '1px solid #DDD',
    height: '150px'
  },
  contentWrap: {
    width: '1200px',
    display: 'flex',
    alignItems: 'center'
  },
  img: {
    width: '150px',
    height: '150px',
    paddingLeft: '30px'
  }
};

const SiteHeader = React.createClass({
  mixins: [NavigatableMixin],

  toHome() {
    this.navigate('/');
  },

  render() {
    return (
      <header style={styles.header}>
        <div style={styles.contentWrap}>
          <img src='https://pbs.twimg.com/profile_images/558448364467920896/6Wwyz7tb.png' style={styles.img} onClick={this.toHome} />
          <h1 style={{paddingLeft:'820px',color:'#FFFFFF',fontFamily:'fantasy'}}> 產銷資訊系統 </h1>
        </div>
      </header>
    )
  }
});

module.exports = SiteHeader;
