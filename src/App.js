import './App.css';
import {InlineStyle} from './components/InlineStyle';
//ファイルのインポートは{}つけないとだめ
import {StyledJsx} from './components/StyledJsx';
import {StyledComponents} from './components/StyledComponents';
import { Emotional } from './components/Emotion';


function App() {
  return(
    <div className="App">
      <InlineStyle />
      <StyledJsx />
			<StyledComponents />
			<Emotional />
    </div>
   )
  }
export default App;
