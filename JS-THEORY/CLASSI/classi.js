 // CLASSI 

/*
  function tutorial()  {


class User // creazione di una classe, per convenzione il nome inizia sempre con la lettera maiuscola.
 {
constructor(username,mail,years,verified) // il costruttore è un metodo o funzione statica che viene letta di default ogni volta che si chiama listanza du user.. ovvero ogni volta che si usa "new User"
{

this._username = username,
this._mail = mail;
this._years= years;
this._verified = verified; 

}

isVerified() //questa è una di una serie di metodi all'interno della nostra classe. sono funzioni
{
    return this._verified;
}

setVerified(verified){
    this._verified = verified;
}

getUsername(){
    return this._username;
}

getBirthDayYear(){
    return (new Date().getFullYear())-this._years;
}

}


var u = new User( "alan","omamalan@hotmail.it", 26,true);  // qui richiamiamo l'istanza della classe utente.
//un modo per occedere agli elementi della classe.
console.log(u.getUsername());
console.log(u.getBirthDayYear());
u.setVerified(false);
console.log(u.isVerified());

// altro modo usando, questo è più simile a quello che usavamo per occedere alle proprietà degli oggetti.
console.log(u.mail);
u.mail= "yooooo";
console.log(u.mail);


}

tutorial();
*/

                 // CLASSI E EREDITARIETA

                 function tutorial()  {


                    class User // creazione di una classe, per convenzione il nome inizia sempre con la lettera maiuscola.
                     {
                    constructor(username,mail,years,verified) // il costruttore è un metodo o funzione statica che viene letta di default ogni volta che si chiama listanza du user.. ovvero ogni volta che si usa "new User"
                    {
                    
                    this._username = username,
                    this._mail = mail;
                    this._years= years;
                    this._verified = verified; 
                    
                    }
                    
                    isVerified() //questa è una di una serie di metodi all'interno della nostra classe. sono funzioni
                    {
                        return this._verified;
                    }
                    
                    setVerified(verified){
                        this._verified = verified;
                    }
                    
                    getUsername(){
                        return this._username;
                    }
                    
                    getBirthDayYear(){
                        return (new Date().getFullYear())-this._years;
                    }
                    
                    }
                    
                
                    
                
                    class Admin extends User //qui ho creato la classe "admin" e usando la parola "extend" prima di usare il nom e "User" sto ereditando tutte le proprietà della classe User, cioe metodi e tutto quello nel costruttore.
                    {
                constructor(username,mail,passwd){
                    super(username,mail,26,true); // dobbiamo sempre fare "super" passando gli attributi della classe padre prima di andare avanti
                    this._passwd = passwd;
                }
                
                 changePassword(newPassword){
                    this._passwd = newPassword;
                    console.log("password cambiata per ", super.getUsername());
                 }
                    }
                    
                    
                
                    var a = new Admin("alan", "omamalan@hotmail.it","1234");
                    a.changePassword("5678");
                    console.log(a.mail);
                    console.log(a.getBirthDayYear());
                
                
                
                    }
                    
                    tutorial();
                       