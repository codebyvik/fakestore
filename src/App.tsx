import Layout from "./pages/layout/layout";
import { Toaster } from "@/components/ui/sonner";
import AppRoutes from "./routes";

function App() {
  return (
    <>
      <Layout>
        <AppRoutes />
      </Layout>
      <Toaster />
    </>
  );
}

export default App;
