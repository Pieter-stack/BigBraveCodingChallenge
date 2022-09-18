
//Import Images
import { ReactComponent as Pants } from './Images/pants.svg';
import ChefTop from './Images/chef.png';
import DeveloperTop from './Images/developer.png';
import SocialMediaTop from './Images/social-media.png';
import YogaTop from './Images/yoga.png';
import FemaleHead from './Images/f-head.png';
import MaleHead from './Images/m-head.png';
import OldFemaleHead from './Images/old-f-head.png';
import OldMaleHead from './Images/old-m-head.png';

//Import Components
import './App.css';
import Blobs from './Components/Blobs';
import Background from './Components/Background';

//Import Libraries
import React, {useState} from 'react';
import { SliderPicker  } from 'react-color'


function App() {
  //UseStates for input variables
  var [Name, setName] = useState("");
  var [Surname, setSurname] = useState("");
  var [Gender, setGender] = useState("");
  var [DOB, setDOB] = useState("");
  var [colour, setColour] = useState("#000");

  //Colour picker 
  class ColourPicker extends React.Component {
   //sate to set rgb colour
    state = {
      background: 'rgb(0,0,0,1)',
      color:""
    };
    //function to set colour when colour updates
    changeHandler = (colors) => {
      let col = 'rgb('+colors.rgb.r+','+colors.rgb.g+','+colors.rgb.b+','+colors.rgb.a+')'
      this.setState({ background: col, color:colors.rgb });
      //set colour
      setColour(this.state.background);
    };
 
  //render return of colour picker
    render() {
      return (
        <div id="main" style={{marginTop:'40px'}}>
        <SliderPicker 
          className="picker"
          color={ this.state.color }
          onChange={ this.changeHandler }
        />
        </div>
      );
    }
  }


  //Multistep form (Step 1)
  function Form1() {

    //validation for input fields
    if(document.getElementById('name').value === "" && document.getElementById('surname').value === ""){

    }else{
      //Remove form 1 and display form 2
      document.getElementById('form1Name').style.display="none";
      document.getElementById('form1Surname').style.display="none";
      document.getElementById('form2Gender').style.display="block";
      document.getElementById('form2DOB').style.display="block";
      document.getElementById('next1').style.display="none";
      document.getElementById('indicate2').style.backgroundColor="#FE938C";
      //set Name and Surname
      setName(document.getElementById('name').value);
      setSurname(document.getElementById('surname').value);
    }
}

 //Multistep form (Step 2)
function Form2() {
  //get date value from input
  var userage = document.getElementById('dob').value;
  //set date as a new date format
  var dob = new Date(userage); 
 
  //validation of date
  if(userage === null || userage === '') {
    document.getElementById("Errormessage").innerHTML = "**Choose a date please!";  
    return false; 
  } else {
  
  //calculate month difference from current date in time
  var month_diff = Date.now() - dob.getTime();
  
  //convert the calculated difference in date format
  var age_dt = new Date(month_diff); 
  
  //extract year from date    
  var year = age_dt.getUTCFullYear();
  
  //now calculate the age of the user
  var age = Math.abs(year - 1970);

  //set age
  setDOB(age);
  //set gender
  if(document.getElementById('gender1').checked === true) {   
    setGender('Male');  
  }else if(document.getElementById('gender2').checked === true) {   
    setGender('Female');  
  }else if(document.getElementById('gender3').checked === true) {   
    setGender('Other');  
  }

//Age validation
  if(age > 18){
  //form validation
  if(document.getElementById('gender1').checked || document.getElementById('gender2').checked || document.getElementById('gender3').checked){
    document.getElementById('form2Gender').style.display="none";
    document.getElementById('form2DOB').style.display="none";
    document.getElementById('form3Occupation').style.display="block";
    document.getElementById('form3Colour').style.display="block";
    document.getElementById('next2').style.display="none";
    document.getElementById('submit').style.display="block";
    document.getElementById('indicate3').style.backgroundColor="#FE938C";
    document.getElementById("Errormessage").innerHTML = "";  
    return;
  }else{
    document.getElementById("Errormessage").innerHTML = "**Please fill in all form elements.";  
    return false;
  }
  }else{
  document.getElementById("Errormessage").innerHTML = "**You need to be 18 or older to continue!";  
  return false;
  }
    }
}

 //Multistep form (Step 2)
function Form3() {
  //set occupation 
  var occupation = document.getElementById("occupation").value;

  //set character clothing shirt
if(occupation === "Chef"){
  document.getElementById('chef').style.display="block";
  document.getElementById('developer').style.display="none";
  document.getElementById('socialmedia').style.display="none";
  document.getElementById('yoga').style.display="none";
}else if(occupation === "Developer"){
  document.getElementById('chef').style.display="none";
  document.getElementById('developer').style.display="block";
  document.getElementById('socialmedia').style.display="none";
  document.getElementById('yoga').style.display="none";
}else if(occupation === "Social Media Influencer"){
  document.getElementById('chef').style.display="none";
  document.getElementById('developer').style.display="none";
  document.getElementById('socialmedia').style.display="block";
  document.getElementById('yoga').style.display="none";
}else if(occupation === "Yoga Instructor"){
  document.getElementById('chef').style.display="none";
  document.getElementById('developer').style.display="none";
  document.getElementById('socialmedia').style.display="none";
  document.getElementById('yoga').style.display="block";
}

//random true/false for gender OTHER value to set male or female randomly
var other_boolean = Math.random() < 0.5;

//Gender check male or female 
//Check age to see if character gets an old female or old male head
if(Gender === "Male" && DOB < 65){
  document.getElementById('female').style.display="none";
  document.getElementById('oldfemale').style.display="none";
  document.getElementById('male').style.display="block";
  document.getElementById('oldmale').style.display="none";
}else if(Gender === "Male" && DOB > 65){
  document.getElementById('female').style.display="none";
  document.getElementById('oldfemale').style.display="none";
  document.getElementById('male').style.display="none";
  document.getElementById('oldmale').style.display="block";
}else if(Gender === "Female" && DOB < 65){
  document.getElementById('female').style.display="block";
  document.getElementById('oldfemale').style.display="none";
  document.getElementById('male').style.display="none";
  document.getElementById('oldmale').style.display="none";
}else if(Gender === "Female" && DOB > 65){
  document.getElementById('female').style.display="none";
  document.getElementById('oldfemale').style.display="block";
  document.getElementById('male').style.display="none";
  document.getElementById('oldmale').style.display="none";
}else if(Gender === "Other" && DOB < 65){

  if(other_boolean){
    document.getElementById('female').style.display="block";
    document.getElementById('oldfemale').style.display="none";
    document.getElementById('male').style.display="none";
    document.getElementById('oldmale').style.display="none";
  }else{
    document.getElementById('female').style.display="none";
    document.getElementById('oldfemale').style.display="none";
    document.getElementById('male').style.display="block";
    document.getElementById('oldmale').style.display="none";
  }

}else if(Gender === "Other" && DOB > 65){
  if(other_boolean){
    document.getElementById('female').style.display="none";
    document.getElementById('oldfemale').style.display="block";
    document.getElementById('male').style.display="none";
    document.getElementById('oldmale').style.display="none";
  }else{
    document.getElementById('female').style.display="none";
    document.getElementById('oldfemale').style.display="none";
    document.getElementById('male').style.display="none";
    document.getElementById('oldmale').style.display="block";
  }
}

//display pants in user favourite colour
document.getElementById('pants').style.display="block";

//display little blurb
 document.getElementById("Description").innerHTML = "Hey my name is " + Name + " " + Surname;  
 document.getElementById("Description2").innerHTML = "I am " + DOB + " years old and I work as a " + occupation;  
}


  return (
    <div className="App">  
      <Background/>
      <Blobs/> 
    <header className="App-header">
      <div className='Form'>  
        <div className='FormCon'>
        <div className="heading Title">
            <ul>
              <li><span>Hello There!</span></li>
              <li><span>Welcome to Mini Me     .</span></li>
              <li><span>Create a character     .</span></li>
              <li><span>Developed by Pieter    .</span></li>
            </ul>
        </div>

        {/*Form wizard page 1 */}
        <div className='InputCon' id='form1Name'>
        <p className='InputTitle'>Name</p>
        <input id='name' type="text" className="Input" name="firstname" placeholder="Your name.."/>
        </div>
        <div className='InputCon' id='form1Surname'>
        <p className='InputTitle'>Surname</p>
        <input id='surname' type="text" className="Input" name="surname" placeholder="Your surname.."/>
        </div>

        {/*Form wizard page 2 */}
        <div className='InputCon formload' id='form2Gender' style={{height:'160px'}} >
        <p className='InputTitle'  style={{width:'50%'}} >Gender</p>
        <div className='InputRadio' style={{  marginLeft: '20px'}}>
          <input className='InputRadioCircle' type="radio" id="gender1" name="gender" value="30"/>
          <label className='InputRadioTitle' for="gender1">Male</label>
        </div>
        <div className='InputRadio ' >
          <input className='InputRadioCircle' type="radio" id="gender2" name="gender" value="60"/>
          <label className='InputRadioTitle' for="gender2">Female</label>
        </div>
        <div className='InputRadio' style={{  marginLeft: '20px', marginTop:'8px'}}>
          <input className='InputRadioCircle' type="radio" id="gender3" name="gender" value="100"/>
          <label className='InputRadioTitle' for="gender3">Other</label>
        </div>
        </div>
        <div className='InputCon formload' id='form2DOB'  style={{height:'160px'}} >
          <p className='InputTitle'>Date of birth</p>
          <input id='dob' type="date" className="Input" name="DOB" placeholder="Your DOB.."/>
          <p id ="Errormessage" className='Error'> </p>
        </div> 

        {/*Form wizard page 3 */}
        <div className='InputCon formload' id='form3Occupation' >
          <p className='InputTitle'>Occupation</p>
          <select id='occupation' className="Input"  name="occupation">
              <option value="Chef">Chef</option>
              <option value="Developer">Developer</option>
              <option value="Social Media Influencer">Social Media Influencer</option>
              <option value="Yoga Instructor">Yoga Instructor</option>
           </select>
          </div>
          <div className='InputCon formload' id='form3Colour' >
          <p className='InputTitle'>Favourite colour</p>
          <div style={{backgroundColor: colour}} className='ChosenColour'></div>
          <ColourPicker/>
          </div>

        <div className='PageIndicator'>
          <div className='dot' id='indicate1' style={{marginLeft:'-5px', backgroundColor:'#FE938C'}}></div>
          <div className='dot'  id='indicate2'></div>
          <div className='dot'  id='indicate3'></div>
        </div>

        <div className='Submitbtn' id='submit' onClick={Form3}>
        <p className='BtnTitle'>Create Mini Me</p>
        </div>
        <div className='Nextbtn' id='next2' onClick={Form2}>
        <p className='BtnTitle'>Next</p>
        </div>
        <div className='Nextbtn' id='next1' onClick={Form1}>
        <p className='BtnTitle'>Next</p>
        </div>
        </div>
      </div>

      <div className='Display'> 
        <img src={FemaleHead} id='female' className="Head" alt="Head"/> 
        <img src={MaleHead} id='male' className="Head" alt="Head"/> 
        <img src={OldFemaleHead} id='oldfemale' className="Head" alt="Head"/> 
        <img src={OldMaleHead} id='oldmale' className="Head" alt="Head"/> 
        <img src={ChefTop} id='chef' className="TopShirt" alt="shirt"/> 
        <img src={DeveloperTop} id='developer' className="TopShirt" alt="shirt"/> 
        <img src={SocialMediaTop} id='socialmedia' className="TopShirt" alt="shirt"/> 
        <img src={YogaTop} id='yoga' className="TopShirt" alt="shirt"/> 
        <Pants id='pants' className='Pants' color={colour} />  

      <p className='Description' id ="Description" ></p>
      <p className='SubDescription' id ="Description2" ></p>
      </div>
      </header> 
    </div>
  );
}

export default App;