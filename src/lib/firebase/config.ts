const config = {
apiKey: "AIzaSyBbKnPwO-u-phkPZSvqTJGClH1INXbfR-g",
  authDomain: "twitter-c3dda.firebaseapp.com",
  projectId: "twitter-c3dda",
  storageBucket: "twitter-c3dda.appspot.com",
  messagingSenderId: "143101923152",
  appId: "1:143101923152:web:4686d43c5dbc2172702655",
  measurementId: "G-P8F2HKJMVX"

  
 // apiKey: process.env.NEXT_PUBLIC_API_KEY,
//  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
//  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
//  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
//  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
//  appId: process.env.NEXT_PUBLIC_APP_ID,
//  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID
} as const;

type Config = typeof config;

export function getFirebaseConfig(): Config {
  if (Object.values(config).some((value) => !value))
    throw new Error('Firebase config is not set or incomplete');

  return config;
}
