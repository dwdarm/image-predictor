import predictApi from './api/predict';
import result from './components/result';
import loading from './components/loading';

const App = {

  mount() {
    const predictBtn = document.getElementById('predict');
    predictBtn.addEventListener('click', () => {
      const imageUrl = document.getElementById('image-url').value;
      const resultCont = document.getElementById('result');

      predictBtn.classList.add('is-loading');
      resultCont.innerHTML = loading();
      predictApi.general(imageUrl)
        .then(res => {
          resultCont.innerHTML = result({
            image: {
              url: imageUrl,
              alt: 'Image'
            },
            table: {
              data: res.data.outputs[0].data.concepts
            }
          });
        })
        .catch(err => {
          resultCont.innerHTML = '';
        })
        .finally(() => {
          predictBtn.classList.remove('is-loading');
        })
    })
  }

}

export default App;