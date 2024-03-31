import swal from "sweetalert";
import "./App.css";

let thisYear = new Date();
let age = parseInt(thisYear.getFullYear()) - 2006;

const imgs = [
  "https://cdn-icons-png.flaticon.com/512/15567/15567742.png",
  "https://cdn-icons-png.flaticon.com/512/9375/9375367.png",
];

const showProfile = () =>{
  swal({
    title: "Fajar PB",
    text: `Birtdate: Cianjur 09/01/06 \n Age: ${age} \n Religion: Islam \n Nationality: Indonesia \n Status: not Married yet`,
    button:{
      text: "OK"
    },
  });
}
const showSkill = () =>{
  swal({
    title: "My Skills",
    text: `1. Making Game using Construct 3\n 2. Making Website and Desktop Apps (Frontend Only)\n 3. Playing Guitar \n 4. Editing Audio & Video`,
    button:{
      text: "OK"
    },
  });
}

const App = () => {
  return (
    <div className="Item">
      <div className="PortofolioTitle">
        <h1 class="Title">Portofolio - Fajar PB</h1>
      </div>
      <div className="MainName">
        <div className="ChildName">
          <img src={imgs[0]} />
          <h1 onClick={showProfile}>Fajar PB</h1>
        </div>
        <div className="ChildName">
          <img src={imgs[1]} />
          <h2 onClick={showSkill}>Game Developer & Software Developer</h2>
        </div>
      </div>
    </div>
  );
};

export default App;
