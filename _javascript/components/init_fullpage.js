export default function initFullpage(){
  new fullpage('#fullpage', {
    //options here
    autoScrolling:true,
    navigation: true,
    navigationTooltips: [
      '',
      'About Me',
      'Carrier',
      'Education',
      'Projects',
      'Conatct Me'
    ],
  });
}
