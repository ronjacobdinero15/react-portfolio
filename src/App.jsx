import Header from "./components/Header";
import AppLayout from "./components/AppLayout";

function App() {
  return (
    <div className="container mx-auto my-5 max-w-[90%] sm:max-w-[80%]">
      <Header />

      <AppLayout />
    </div>
  );
}

export default App;
