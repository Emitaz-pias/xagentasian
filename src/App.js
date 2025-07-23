import AppRoutes from "./AppRoutes";
import { AuthProvider } from "./components/authContext/AuthContext";

function App() {
  return (
     <AuthProvider>
      <AppRoutes/>
     </AuthProvider>
   
  );
}


export default App;