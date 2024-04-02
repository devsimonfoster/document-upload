import './App.css';
import CloseButton from './components/CloseButton';
import FormAction from './components/FormAction';
import UploadLeft from './components/UploadLeft';
import UploadRight from './components/UploadRight';

function App() {
  return (
    <div class="upload-main">
      <div class="upload-container">
        <CloseButton />
        <div class="upload-inner">
          <h1 class="main-haeding">documents upload</h1>
          <form action="">
            <div class="upload-form-inner">
              <UploadLeft />
              <UploadRight />
            </div>
            <FormAction />
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
