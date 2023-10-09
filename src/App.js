import { useState } from 'react';
import './App.css';
import Students from './Components/Students';
import { data } from './Data/data';
import { Route, Routes} from 'react-router-dom';
import Dashboard from './Components/Dashbord';
import Addinfo from './Components/AddInfo';
import Editupdateinfo from './Components/EditUpdateInfo';
import Wrongpage from './Components/Wrongpage';




function App() {
  const[students, setStudents] = useState(data);
  
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Dashboard/>}/>
        <Route exact path='/Students' element={<Students
        students={students}
        setStudents={setStudents}/>}/>
        <Route exact path='/addinfo' element={<Addinfo
        students={students}
        setStudents={setStudents}/>} />
        <Route exact path='/editinfo/:idNo' element={<Editupdateinfo
                students={students}
        setStudents={setStudents}/>} />

        <Route path='*' element={<Wrongpage/>}/>
        </Routes>
      {/* <Students 
      students={students}
      setStudents={setStudents}
      /> */}
            
    </div>
  );
}

export default App;
