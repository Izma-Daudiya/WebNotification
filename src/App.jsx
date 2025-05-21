import { useEffect } from "react"
import { messaging } from "./firebase"
import { getToken } from "firebase/messaging"

function App() {
  
  async function requestPermission(){
    const permission = await Notification.requestPermission()
    if(permission === 'granted'){
      // Generate Token
      const token = await getToken(messaging, {vapidKey: 'BJxPvCj24EQiJHDgvmK4CoATjO0zZrRDuisqSDpWv1shTGOJ1aCKL-pS6KL-K60V4rhsJbZlTEHxM324APdYLtA'})
      console.log(token)
    } else if(permission === 'denied'){
      alert("You denied notification")
    }
  }

  useEffect(() => {
    // Request User for notification permission
    requestPermission()
  },[])

  return (
   <>
    <h1>Web Notification</h1>

   </>
  )
}

export default App
