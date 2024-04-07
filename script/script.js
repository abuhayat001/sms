
function showItem() {
    const mineScreen = document.getElementById('min-screen');
    const barIcon = document.getElementById('bar');

    barIcon.style.display = 'none';

    mineScreen.style.display = 'flex';
}


function contactItem() {
    document.getElementById("container").style.display = "flex";
    document.getElementById("chat-btn").style.display = "none";
    document.getElementById("main-section").style.display = "none";
}


function signIn(){
    document.getElementById("chat-btn").style.display = "block";
    document.getElementById("navbar").style.display = "block";
    document.getElementById("form-area").style.display = "none";
}


function blockItem() {
    const mineScreen = document.getElementById('min-screen');
    const barIcon = document.getElementById('bar');

    barIcon.style.display = 'block';

    mineScreen.style.display = 'none';




}


function pushData() {
    let dataIn = document.getElementById("input-sms").value;
    let store = document.getElementById("masege");
    let newPara1 = document.createElement('div');

    let newPara = document.createElement('p');
    const styleP = newPara.style;
    const styles = {
      width: '50%',
      padding: '3px',
      fontSize: '15px',
      width: 'fit-content',
      height: 'fit-content',
      float: 'right',
      backgroundColor: 'blue',
      color: 'white',
      borderRadius: '5px'
    };
    
    Object.assign(styleP, styles);
    newPara.innerText = dataIn;
    
    let child = document.getElementById("masege").appendChild(newPara1);

    child.appendChild(newPara);
    document.getElementById("input-sms").value = '';

}





