import React, { Component } from 'react';
import {Document, Page} from 'react-pdf';

class Resume extends Component {
  constructor(props){
    super(props);

    this.state = {
      numPages: null,
      pageNumber: 1
    }
  }

  onDocumentLoad = ( {numPages}) => {
    this.setState({numPages});
  }

  render() {
    const {pageNumber, numPages} = this.state;

    return (
      <div>
        <Document
          file = './resume.pdf'
          onLoadSuccess = {this.onDocumentLoad}
          >
            <Page pageNumber = {pageNumber} />
        </Document>
        <p> Page {pageNumber} of {numPages}</p>
          <iframe src="./files/resume.pdf"> yo</iframe>
      </div>



    );
  }
}

export default Resume;
