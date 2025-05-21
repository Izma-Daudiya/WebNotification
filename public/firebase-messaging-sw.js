importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyDsXsyGaJmO2ui0I_WqFpySXrvp1sjvvTk",
  authDomain: "app-dc275.firebaseapp.com",
  databaseURL: "https://app-dc275-default-rtdb.firebaseio.com",
  projectId: "app-dc275",
  storageBucket: "app-dc275.firebasestorage.app",
  messagingSenderId: "283374229605",
  appId: "1:283374229605:web:671f62d6826d7149b24e8c"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});