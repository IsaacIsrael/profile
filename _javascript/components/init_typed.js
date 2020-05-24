import Typed from 'typed.js';

export default function initTyped(){
  var options = {
    strings: ["<span class='quote'>'Isaac Israel</span>^1000<br><span class='code'>></span><span class='quote'>Full Stack Developer'</span>" ],
    typeSpeed: 40,
    startDelay: 1000
  };

  var typed = new Typed('.cover-title', options);
}
