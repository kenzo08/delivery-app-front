import { SafeAreaProvider } from 'react-native-safe-area-context'
import Navigation from '@/navigation/Navigation'
import { StatusBar } from 'expo-status-bar'
import "./global.css"
import AuthProvider from '@/providers/auth/AuthProvider'
import Toast from '@/components/ui/Toast'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
        }
    }
})

export default function App() {
  return (
      <QueryClientProvider client={queryClient}>
          <AuthProvider>
              <SafeAreaProvider>
                  <Navigation/>
              </SafeAreaProvider>
          </AuthProvider>
        <StatusBar style='light'/>
          <Toast />
      </QueryClientProvider>
  );
}
