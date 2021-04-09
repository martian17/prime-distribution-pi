var Primes = function(){
    var primes = [2,3];
    
    var isPrime = function(candidate){
        var max = Math.ceil(Math.sqrt(candidate));
        for(var i = 0; i < primes.length; i++){
            if(candidate%primes[i] === 0){//candidate is not a prime
                return false;
            }if(primes[i] > max){
                return true;
            }
        }
        return true;
    };
    
    var sdsum = 0;
    //avg = 0
    var pd0 = 
    
    this.getNext = function(){
        var candidate = primes[primes.length-1];
        while(true){
            candidate = candidate+2;
            if(isPrime(candidate)){
                primes.push(candidate);
                return primes[primes.length-3];
            }
        }
    };
    this.primes = primes;
};

var primes = new Primes();

var canvas = document.getElementById("canvas");


for(var i = 0; i < 1000000; i++){
    primes.getNext();
}