import {
	CognitoUserPool,
	AuthenticationDetails,
	CognitoUser,
} from 'amazon-cognito-identity-js';

import * as AWS from 'aws-sdk/global';

type QstLogin = (phone_number:string,password:string) => Promise<boolean>;


export const QuestLogin:QstLogin=async function(phone_number,password){
    // const {setLoginStatus}=UseQuestState()
    let authenticationData = {
        Username: phone_number,
        Password: password,
    };
    let authenticationDetails = new AuthenticationDetails(
        authenticationData
    );
    let poolData = {
        UserPoolId:'ap-south-1_szA78wY0d', // Your user pool id here
        ClientId: '5p2snk7umnf34d97tsvkbi89dr', // Your client id here
    };
    let userPool = new CognitoUserPool(poolData);
    let userData = {
        Username: authenticationData.Username,
        Pool: userPool,
    };
    let cognitoUser = new CognitoUser(userData);
   


    return new Promise((resolve, reject) => {
    cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: function(result) {
            var accessToken = result.getAccessToken().getJwtToken();
            // console.log('result')
            // console.log(result)
            cognitoUser.authenticateUser
            var params = {
                AccessToken: 'STRING_VALUE' /* required */
              };
            cognitoUser.getUserAttributes(function(err, result) {
                if (err) {
                    alert(err);
                    return;
                }
                if(result)
                for (let i = 0; i < result.length; i++) {
                    console.log('attribute ' + result[i].getName() + ' has value ' + result[i].getValue());
                }
            })
            //POTENTIAL: Region needs to be set if not already set previously elsewhere.
           
            console.log('hoola')
            AWS.config.credentials = new AWS.CognitoIdentityCredentials({
                IdentityPoolId:'ap-south-1:80faa4ae-fec1-4a1d-ac8e-ca67f8523073', // your identity pool id here
                Logins: {
                    // Change the key below according to the specific region your user pool is in.
                    'cognito-idp.ap-south-1.amazonaws.com/ap-south-1_szA78wY0d': result
                        .getIdToken()
                        .getJwtToken(),
                },
            });

            //refreshes credentials using AWS.CognitoIdentity.getCredentialsForIdentity()
            (AWS.config.credentials as AWS.CognitoIdentityCredentials).refresh(error => {
                if (error) {
                    console.log(error)
                    reject(false)
                    return error;
                } else {
                    // Instantiate aws sdk service objects now that the credentials have been updated.
                    // example: var s3 = new AWS.S3();
                    console.log('Successfully logged!');
                    
                    // setLoginStatus()
                    resolve(true)
                }
            });
        },

        onFailure: function(err) {
            alert(err.message || JSON.stringify(err));
            reject(false)
            
        },
        newPasswordRequired: function(userAttributes, requiredAttributes) {
            // User was signed up by an admin and must provide new
            // password and required attributes, if any, to complete
            // authentication.

            // the api doesn't accept this field back
            delete userAttributes.email_verified;
            delete userAttributes.phone_number;
            cognitoUser.completeNewPasswordChallenge('Saintumbra7!', {name:"pauk",address:'aloha'}, {
                onSuccess: (result) => {
                console.log("NEW PASSWORD COMPLETED: ");
              
                console.log(result);
                resolve(true)
                },
                onFailure: (err) => {
                console.error(err);
               
                reject(false)
                }
            });

            // store userAttributes on global variable
            
        }
    });


})


}

