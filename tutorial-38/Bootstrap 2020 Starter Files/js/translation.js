/*=====================================================*/
/*                Microsoft Translation API            */
/*         POST                                        */
/*=====================================================*/
    function doTranslate(){
        
        var usrText = document.getElementById("usrText").value; 
        console.log(usrText); 

        var data = JSON.stringify([
            {
                "Text": usrText
            }
        ]);
        
        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;
        
        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === this.DONE) {
                console.log(this.responseText);
                displayTranslation(JSON.parse(this.responseText)); 
            }
        });
        
        xhr.open("POST", "https://microsoft-translator-text.p.rapidapi.com/translate?profanityAction=NoAction&textType=plain&to=es&api-version=3.0");
        xhr.setRequestHeader("x-rapidapi-host", "microsoft-translator-text.p.rapidapi.com");
        xhr.setRequestHeader("x-rapidapi-key", "04ba4d4b0cmsh55c52abd7526c48p1fe391jsne18c605c550b");
        xhr.setRequestHeader("content-type", "application/json");
        xhr.setRequestHeader("accept", "application/json");
        
        xhr.send(data);

        // en - English 
        // es - Spanish
        // de - German
    }


    function displayTranslation(text){
        console.log(text); 
        const placeholder = document.getElementById('translatedCards')
        const card = document.createElement('div')
        card.setAttribute('class', 'card p-3 col-lg-3 col-md-4')
    
        console.log(text[0].translations[0].text); 
        // Create a p and set the text content to the film's description
        const h = document.createElement('h6')
        h.textContent = 'Spanish Translation:'
        const p = document.createElement('p')
       var result = text[0].translations[0].text
        p.textContent = `${result}` // End with an ellipses
    
        // Append the cards to the container element
        placeholder.appendChild(card)
        
    
        // Each card will contain an h1 and a p
        card.appendChild(h)
        card.appendChild(p)
    }