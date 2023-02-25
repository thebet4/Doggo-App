import Core from "@core/index";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <Core />
    </SafeAreaProvider>
  );
}
