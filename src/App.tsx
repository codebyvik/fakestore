import Layout from "./pages/layout/layout";
import AppRoutes from "./routes";
import { Toaster } from "@/components/ui/sonner";

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
