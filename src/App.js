import Header from './Header';

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <div className="container mx-auto px-4">
        <div className="bg-white dark:bg-gray-800">
          <h1 className="text-gray-900 dark:text-white">Dark mode is here!</h1>
          <p className="text-gray-600 dark:text-gray-300">Lorem ipsum...</p>
        </div>
      </div>
    </>
  );
}

export default App;
