  // Load the Google Transliterate API
      google.load("elements", "1", {
            packages: "transliteration"
          });

      function onLoad() {
        var options = {
            sourceLanguage:
                google.elements.transliteration.LanguageCode.ENGLISH,
            destinationLanguage:
                [google.elements.transliteration.LanguageCode.PUNJABI],
            shortcutKey: 'ctrl+g',
            transliterationEnabled: true
        };

        // Create an instance on TransliterationControl with the required
        // options.
        var control =
            new google.elements.transliteration.TransliterationControl(options);

        // Enable transliteration in the textbox with id
        // 'transliterateTextarea'.
 
       control.makeTransliteratable(['original'],{adjustElementStyle:true});
       document.getElementById('original').style.fontSize="x-large";
       document.getElementById('original').style.width="425px";
       document.getElementById('original').style.height="700px";
       
       document.getElementById('original').style.padding="14px";
         document.getElementById('original').value="ਅਲਫ ਆ=੧;             \n\
ਅਲਫ ਬ=੨;              \n\
\n\
ਜੇ (ਆ\>ਬ)                \n\
{\n\
   ਲਿਖੋ: \" ਪਿਹਲਾ  \";    \n\
}\n\
ਹੋਰ                         \n\
{ \n\
  ਲਿਖੋ: \"ਦੂਜਾ\";           \n\
}";


             
}

      google.setOnLoadCallback(onLoad);
      


function compile()
{


try{
  var data=document.getElementById("original").value;

  var translated=data.replace(/ਜੇ/g,"if")
              .replace(/ਅਲਫ/g,"var")
              .replace(/ਚੱਕਰ/g,"for")
              .replace(/੧/g,"1")
              .replace(/੨/g,"2")
                .replace(/੩/g,"3")
            .replace(/੪/g,"4")
            .replace(/੫/g,"5")
            .replace(/੬/g,"6")
            .replace(/੭/g,"7")
            .replace(/੮/g,"8")
            .replace(/੯/g,"9")
            .replace(/੦/g,"0")
            .replace(/ਚੁਣੋ/g,"switch")
            .replace(/ਅਗਰ/g,"case")
            .replace(/ਚਾਲੂ/g,"continue")
            .replace(/ਤਰੀਕਾ/g,"function")
            .replace(/ਵਾਪਸ/g,"return")
            .replace(/ਖਾਲੀ/g,"null")
            .replace(/ਜਦ ਤਕ/g,"while")
            .replace(/ਕਰੋ/g,"do")
            .replace(/ਚੇਤਾਵਨੀ/g,"alert")
            .replace(/ਨੀਚੇ ਲਿਖੋ:/g,"output=output+'<br>'+")
              .replace(/ਲਿਖੋ:/g,"output+=")
              .replace(/ਹੋਰ/g,"else")
              .replace(/ਰੋਕ/g,"break");


  var out=run(translated);

    //document.getElementById("translated").innerHTML=translated;
     document.getElementById("translated").innerHTML=out;

  }

  catch(err)
  {
    alert("Oops. Please Check. Error in Code: "+err);
  }

}

function run(translated)
{

    var output="";
  eval(translated);
  return output;
}
