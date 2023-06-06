
import './App.css';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profail from './Profile/Commponent/Profail';
import Pagedicoration from './Profile/Pagedicoration';




function App() {
  return (
    <div className="App">
    
    <Pagedicoration/>
    <Profail fullnam='BILEL MHENNI' profession='web developer ' bio='bilel.mh1997@gmail.com' >
      < img src= 'https://pps.whatsapp.net/v/t61.24694-24/74487317_575041669755612_804167573561260890_n.jpg?ccb=11-4&oh=01_AdR0cBeSN5kHGpdb6-tTU-ydKMdoVooyy1dgugPVaV385w&oe=64811819' width={100} className="rounded-circle"  alt='BILEL MHENNI' />
 </Profail>
    < Profail fullnam='HAMZA' profession='private school' bio='donotreply@gomycode.co' >
    < img src= 'https://blog.hubspot.com/hs-fs/hubfs/GettyImages-1177482693.jpg?width=595&height=400&name=GettyImages-1177482693.jpg' width={100} className="rounded-circle" alt='HAMZA'/>
  </Profail>
  </div>
   );
}

export default App;
