import Toast from "react-native-toast-message";
import RootNavigator from "./navigation/RootNavigator";

export default function App() {
  return (
    <>
      <RootNavigator />
      <Toast />
    </>
  );
}
