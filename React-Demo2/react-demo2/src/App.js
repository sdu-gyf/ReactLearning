import { Button } from 'antd';
import {get} from './utils/httpClient'




const App=()=> {

  function handleClick() {
    // console.log('1')
    get('/system/login?userName=test&password=test')
    .then((res)=>{
      console.log(res)
    })
  }

  return (
    <div className="App">
      Hello
      <Button type="primary" onClick={ handleClick }>你好</Button>
    </div>
  );
}

export default App;
