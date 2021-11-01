import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Upload } from '@progress/kendo-react-upload';

const App = () => {
  const onBeforeUpload = event => {
    event.additionalData.description = 'File upload';
  };

  const onBeforeRemove = event => {
    event.additionalData.description = 'File remove';
  };

  return <Upload batch={false} multiple={true} defaultFiles={[]} onBeforeUpload={onBeforeUpload} onBeforeRemove={onBeforeRemove} withCredentials={false} saveUrl={'https://demos.telerik.com/kendo-ui/service-v4/upload/save'} removeUrl={'https://demos.telerik.com/kendo-ui/service-v4/upload/remove'} />;
};

ReactDOM.render(<App />, document.querySelector('my-app'));