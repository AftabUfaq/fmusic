import { LoginManager, AccessToken,} from "react-native-fbsdk";
import { GoogleSignin,statusCodes,} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

    export const  configureGoogleSignIn = () =>  {
        try {
            GoogleSignin.configure({webClientId:"197692426871-134d2p5jqundqqss2jhjr7ial7nblnln.apps.googleusercontent.com"})
        }catch(error){
            console.log(error, "Error in config")
        }
    }

    export const GooglesignIn = async () => {
        try {
            GoogleSignin.hasPlayServices({ 
                autoResolve: true ,
                showPlayServicesUpdateDialog: true
            }).then((kk) => {
                console.log(kk, 'KKKK')
            })
            .catch((err) => {
                console.log(err, "Error")
            })
            const userInfo = await GoogleSignin.signIn();
           
            const googleCredential = auth.GoogleAuthProvider.credential(userInfo.idToken);
            auth().signInWithCredential(googleCredential).then((data) => {
                console.log(data)
            }).catch((error) => {
                console.log(error)
            })
        } catch (error) {
            switch (error.code) {
                case statusCodes.SIGN_IN_CANCELLED:
                    console.log('cancalled')
                break;
                case statusCodes.IN_PROGRESS:
                    console.log('In Preogresss')
                break;
                case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
                    console.log('Error Play Services')
                break;
                default:
                    console.log(error, "Error")
            }
        }
    };

    export const FacebookLogin  = () =>{
        LoginManager.logInWithPermissions(["public_profile", 'email']).then(
            async function(result) {
                if (result.isCancelled) {
                    console.log("Login cancelled");
                } else {
                    const data =  await AccessToken.getCurrentAccessToken();
                    if (!data) {
                        console.log('Something went wrong obtaining access token');
                        return;
                    }
                    const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);
                    auth().signInWithCredential(facebookCredential).then((data) => {
                        console.log(data)
                    }).catch((error) =>{
                        console.log(error)
                    })
                }
            },
            function(error) {
                console.log("Login fail with error: " + error);
            }
        );
    }

    export const LoginWithEmailandPassword = () => {
        
    }