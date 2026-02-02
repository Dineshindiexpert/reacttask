import { Avatar, Imagepicker } from './components/task2'
import { Avatar1, Profile1 } from "./components/profile"
import profile1 from "./assets/images/profile1.png"
import profile2 from "./assets/images/suzuka.jpg"
import Counter from "./components/counter"
 
 
const databaseimage = [profile1, profile2];
const databaseprofile = [
  { name: "nobita", email: "nobitaabc@gmail.com", phone: "880-720-555-1234" },
  { name: "suzuka", email: "abcsuzuka@gmail.com", phone: "880-720-555-5678" }
];


function App() {
  return (
    <div className="d-flex flex-column container border-2 main">
      <div>
        <h1>Task here static :- 1</h1>
        <Profile1 />
      </div>
      <hr />
      <div>
        <h1>Task 2 is here:</h1>

        <Avatar index={0} databaseimage={databaseimage} databaseprofile={databaseprofile} />
        <Avatar index={1} databaseimage={databaseimage} databaseprofile={databaseprofile} />
        <Avatar/>
        <hr />

        <Imagepicker index={0} databaseimage={databaseimage} />
      </div>
      <div>
        <h1>Task 3 :-</h1>
        <Counter/>
        <hr/>
      </div>
    </div>

  );
}
export default App;