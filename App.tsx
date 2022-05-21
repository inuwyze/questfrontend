import * as React from 'react';

import NavContainer from './navigation'

import * as AWS from 'aws-sdk/global';
import { QuestStateProvider } from './QuestState/AppState';


AWS.config.region = 'ap-south-1'; // Region
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'ap-south-1:80faa4ae-fec1-4a1d-ac8e-ca67f8523073',
});



function App() {
  return (
    <QuestStateProvider>
    <NavContainer></NavContainer>
    </QuestStateProvider>
  );
}

export default App;
