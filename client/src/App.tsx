import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Home from "@/pages/home";
import Privacy from "@/pages/privacy";
import Terms from "@/pages/terms";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import AdSenseInfo from "@/pages/adsense-info";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/privacy" component={Privacy} />
          <Route path="/terms" component={Terms} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/adsense-info" component={AdSenseInfo} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
