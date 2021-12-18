import { initializeApp } from "firebase/app";
import fireBaseConfig from '../config/firebaseAuth'
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: fireBaseConfig.apiKey,
  authDomain: fireBaseConfig.authDomain,
  projectId:  fireBaseConfig.projectId,
  storageBucket: fireBaseConfig.storageBucket,
  messagingSenderId: fireBaseConfig.messagingSenderId,
  appId: fireBaseConfig.appId,
  measurementId: fireBaseConfig.measureMentId
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export  const auth = getAuth(app)

export default app;