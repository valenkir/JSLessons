/*switch (browser) {
  case 'Edge':
    alert( "You've got the Edge!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Okay we support these browsers too' );
    break;

  default:
    alert( 'We hope that this page looks ok!' );
}*/

let browser = "Chrome";
if (browser=='Edge'){
    alert( "You've got Edge!" );
} else if (brower == 'Chrome' || brower == 'Firefox' || brower == 'Safari' || brower == 'Opera'){
    alert( 'Okay we support these browsers too' );
} else {
    alert( 'We hope that this page looks ok!' );
}