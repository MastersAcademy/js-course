(function () {
    //  task 1
    var newSetTimeout = window.setTimeout;
    
    window.setTimeout = function( delay, func ) {
        
        newSetTimeout(func, delay);
    
    }
    // functions for checking task 1 and 2
    function sayHello() {
        
        alert("Hello");
    
    }
    
    function sayHello2() {
        
        alert("Hello2");
    
    }
    //  calling new method setTimeout
    window.setTimeout(2000,sayHello);

    //  task 2
    window.setInterval =  function(func, delay){
    	
        setInterval = setTimeout(delay, function iteration(){
    	
     		func();
    	
     		setInterval = setTimeout(delay,iteration);
    	
        });
    
    };
    //  calling new method setInterval
    var  interId = window.setInterval(sayHello2, 1000);
    

    //  task 3

    function fncToDelay( param ) {

        console.log('Delayed run : ' + param);

    }

    function freeze( delay, fnc ) {

        var timeout;
        
        var args;
            
        return function() {

            if ( args == undefined ) {
                	
                args = arguments;
            }
            
            if ( timeout ) {
                	
                clearTimeout( timeout );

            }
            
            timeout = setTimeout( function() {

                fnc.apply( this, args );

                }, delay );

        }

    }

    var frozenFunc = freeze( 1000, fncToDelay );

    frozenFunc('1');
    frozenFunc('2');
    frozenFunc('3');
    frozenFunc('4');
    frozenFunc('5');
    frozenFunc('6');
    frozenFunc('7');
    frozenFunc('8');
    frozenFunc('9');


    //  task 4
    
    function createPipe( originalFnc, fucnArray )   {
        
        var origString;
        
        var args = arguments;
        
        return function () {
            
            origString = arguments[0];
            
            for ( var i = 0; i<args[1].length; i++ ) {              
                
                origString = args[1][i]( origString );
            
            }
            
        originalFnc( origString ); 
            
        }
        
    }

    function originalFnc( string ) {
        
        var target = " ";
        
        var pos = 0;
        
        while ( true ) {
            
            var foundPos = string.indexOf( target, pos );
            
            if ( foundPos == -1 ) {
                
                break;
            }
            
            string = string.replace( string[foundPos+1],string[foundPos+1].toUpperCase());
            
            pos = foundPos + 1;
            
        }
        
        console.log(string.replace( string[0],string[0].toUpperCase()));
        
    }
    
    function filterDigits( string ) {
        
        return string.replace(/[0-9]/g, ''); 
        
    }
    
    function filterSpecial( string ) {
        
        return string.replace(/[!,@,#,$,%,^,&,*,(,),+,=]/g, '');
        
    }
    
    function filterWhiteSpaces( string ) {  
        
        return string.replace(/\s{2,}/g, ' ');
        
    }
    
    var pipe = createPipe( originalFnc, [filterDigits, filterSpecial, filterWhiteSpaces]);
     
    pipe('on345l90y    te**x((((t     h$&er@@@e'); // logs 'Only Text Here' 
    
})();

