import React, { Component } from 'react';

class Resume extends Component {
  render() {
    return (
      <div className = "content">
        <iframe id = "resume" src="https://docs.google.com/document/d/e/2PACX-1vTO5RarM7iIhvV9hm5Bvg585kUMHG9PzTNMnI9jCFJvuW7yfUEUpCKC5cgu533CbbuXRAIBSRjB_cwX/pub?embedded=true" height="900" width="825" ></iframe>
        <iframe src={require('../files/timothychoiresume2018.pdf')} height="1150" width="850" ></iframe>
      </div>
    );
  }
}

export default Resume;
