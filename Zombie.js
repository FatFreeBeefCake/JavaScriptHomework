var BeginningS = [" You wake up in a hospital. You hear faint grumbling outside your door, you get up and crack the door. You see a ZOMBIE!! right outside, you almost black out!",
"Your sitting in your room when you hear screaming outside. You stand up and look out your window there is a horde of zombies running up your street!",
"You wake up in the middle of a grass field, you find out your in the middle of a ring. A ring of ZOMBIES!!!" ];


function randomNumber (range) {
   return Math.round( Math.random() * range );
}


alert( BeginningS [ randomNumber( BeginningS.length - 1) ] );

var weaponList = [" Shotgun"," Rubber Chicken"," Katana"," 9mm", " Rocket Launcher" ];

var weapon = weaponList [ randomNumber( weaponList.length - 1) ];
alert ("With a moment to spare you grab the closest" + weapon + " to you!" );

alert("The fight goes from good to ugly!");

var survival = randomNumber(1);

if(survival === 0 ){
    alert("Finally!! The fight is over, You successfully defeated the walking dead with your weapon, Good Job!");
} else if ( survival > 0 ){
    alert(" Oh No!! Your weapon breaks!!! The zombie starts to dig his teeth in to your face! You wake up in a cold sweat, luckily this time it was just a dream!")
}

