import './App.css';
import Child from './Child';
import AnotherChild from './AnotherChild';
import Box from './Box';
import ErrorBoundary from './ErrorBoundary';
import Modal from './Modal';

const App = () => {  
    return (
      <div className="App">
            <ErrorBoundary>
              <Box>
                <Child />
                <span>hello</span>
                <h2>Hi</h2>
              </Box>
            </ErrorBoundary>
            <ErrorBoundary>
              <Box>
                <AnotherChild />
              </Box>
            </ErrorBoundary>
            <ErrorBoundary>
              <Modal>
                  <h2>Hello</h2>
              </Modal>       
            </ErrorBoundary> 
      </div>
    );  
}

export default App;
