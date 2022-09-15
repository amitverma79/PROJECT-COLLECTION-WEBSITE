var arrayquote = [{
        "author": "Louis L’Amour",
        "quote": "Start writing, no matter what. The water does not flow until the faucet is turned on."
    },
    {
        "author": "William Faulkner",
        "quote": "Get it down. Take chances. It may be bad, but it's the only way you can do anything really good."
    },
    {
        "author": "Terry Pratchett",
        "quote": "The first draft is just you telling yourself the story."
    },
    {
        "author": "Jodi Picoult",
        "quote": "You can always edit a bad page. You can’t edit a blank page"
    },
    {
        "author": "Jack London",
        "quote": "You can’t wait for inspiration. You have to go after it with a club."
    },
    {
        "author": "Ray Bradbury",
        "quote": "First, find out what your hero wants, then just follow him!"
    },
    {
        "author": "Joseph Joubert",
        "quote": "Never write anything that does not give you great pleasure. Emotion is easily transferred from the writer to the reader."


    },
    {
        "author": "Mike Rich",
        "quote": "Write your first draft with your heart. Rewrite with your head."
    },
    {

        "author": "चाणक्य",
        "quote": "ब्रह्माज्ञानी को स्वर्ग तृण है, शूर को जीवन तृण है, जिसने इंद्रियों को वश में किया उसको स्त्री तृण-तुल्य जान पड़ती है, निस्पृह को जगत तृण है"
    },
    {

        "author": "रवींद्रनाथ ठाकुर",
        "quote": "विश्वास वह पक्षी है जो प्रभात के पूर्व अंधकार में ही प्रकाश का अनुभव करता है और गाने लगता है|"
    },
    {

        "author": "चाणक्य",
        "quote": "मेहनत करने से दरिद्रता नहीं रहती, धर्म करने से पाप नहीं रहता, मौन रहने से कलह नहीं होता"
    },
    {

        "author": "महात्मा गाँधी",
        "quote": "सत्याग्रह बल से नहीं ,हिंशा के त्याग से होता है"
    },
    {

        "author": "दीनानाथ दिनेश",
        "quote": "कर्म, ज्ञान और भक्ति का संगम ही जीवन का तीर्थ राज है |"
    },
    {

        "author": "स्वामी शंकराचार्य",
        "quote": "सबसे उत्तम तीर्थ अपना मन है जो विशेष रूप से शुद्ध किया हुआ हो"
    }

]

function randomSelector(arraylength) {
    return Math.floor(Math.random() * arraylength);
}

function showQuote() {
    var randomnumber = randomSelector(arrayquote.length);
    document.getElementById('quote').innerHTML = arrayquote[randomnumber].quote;
    document.getElementById('author').innerHTML = "-" + arrayquote[randomnumber].author;
    // console.log(arrayquote[randomnumber].quote);

}