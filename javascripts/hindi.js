  // Load the Google Transliterate API
      google.load("elements", "1", {
            packages: "transliteration"
          });

      function onLoad() {
        var options = {
            sourceLanguage:
                google.elements.transliteration.LanguageCode.ENGLISH,
            destinationLanguage:
                [google.elements.transliteration.LanguageCode.HINDI],
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


       document.getElementById('original').style.padding="14px";
         document.getElementById('original').value="अल्फ अ=१० ;            \n \
अल्फ बी=२;                 \n \
यदि(अ>बी )             \n \
{  \n \
  लिखो: \"अ बड़ा है\";     \n \
}\n \
वरना                              \n \
{\n \
लिखो: \" अ छोटा है \";    \n \
}";

      }

      google.setOnLoadCallback(onLoad);
      


function compile()
{


  var data=document.getElementById("original").value;

  var translated=data.replace(/यदि/g,"if")
              .replace(/अल्फ/g,"var")
              .replace(/चक्र/g,"for")
              .replace(/१/g,"1")
              .replace(/२/g,"2")
                .replace(/३/g,"3")
            .replace(/੪/g,"4")
            .replace(/६/g,"5")
            .replace(/७/g,"6")
            .replace(/੭/g,"7")
            .replace(/८/g,"8")
            .replace(/९/g,"9")
            .replace(/०/g,"0")      
            .replace(/चुनो/g,"switch")
            .replace(/अगर/g,"case")
            .replace(/चालू/g,"continue")
            .replace(/विधि/g,"function")
            .replace(/वापिस/g,"return")
            .replace(/अशक्त/g,"null")
            .replace(/जबकि/g,"while")
            .replace(/करो/g,"do")
            .replace(/चेतावनी/g,"alert")
            .replace(/निचे लिखो:/g,"output=output+'<br>'+")
              .replace(/लिखो:/g,"output+=")
              .replace(/वरना/g,"else")
              .replace(/रुक/g,"break");


  var out=run(translated);

    //document.getElementById("translated").innerHTML=translated;
     document.getElementById("translated").innerHTML=out;

  

}

function run(translated)
{

    var output="";
  eval(translated);
  return output;
}
