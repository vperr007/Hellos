$(document).ready(function(){
  var $hello = $('#hello');

  var hellos = ['হ্যালো','buna','ᎣᏏᏲ','HOLA','Pẹlẹ o', 'BONJOUR', 'שלום','CIAO', 'GUTEN TAG','مرحبا','MHOLWENI','NAMASTE', 'OLÀ','你好','Sawubona','नमस्ते','привет'];


  for(var n=0;n<20;n++){
    (function skip (position){
      setInterval(function() {
        $hello.text(hellos[position-1]);},
        //set back to setinterval
        //runs the code in order once then
      n*1000)
  })(n);


//check to see if it's repeating the last hello
                       };


  $hello.css({
    'padding-bottom':'20px',

  });
  var moveright = parseInt($hello.width() / 4);

  if($hello.val().length<=5){
    $hello.css({
    'margin-left':'3%',
  });
            /*.val().length*/
    //left > right <
  }
})
