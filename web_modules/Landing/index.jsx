import React, { Component } from 'react';
import TinyMCE from 'react-tinymce';

export default class Landing extends Component {
  state = {
    foo: 'bar',
  }
  handleEditorChange = e => {
    console.log('Content was updated:', e.target.getContent());
  }
  render() {
    return (
      <TinyMCE
        content="<p>This is the initial content of the editor</p>"
        config={{
          plugins: 'link image code',
          toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code',
        }}
        onChange={this.handleEditorChange}
      />
    );
  }
}
