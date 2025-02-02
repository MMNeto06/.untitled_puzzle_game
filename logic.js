$(document).ready(function(){
    const searchParams = new URLSearchParams(window.location.search);
    var ans = searchParams.get("ans");
    //console.log("Ans", ans);
    var $puzzle = $("#puzzle");
    $puzzle.empty(); 
    var content = ``
    switch (ans){
        case null:
            $("#level").html("Level 1");
            content = `
            <p>This is a puzzle game with 50 levels. To pass each level, you must add to the url the answer in the form 
            "/?ans={ANSWER HERE}".</p>
            <p>All the answers should be given in lowercase unless told otherwise.</p>
            <p>The levels increase in difficulty as you pass them (as expected) and they can vary quite a lot.</p>
            <p>This page you're reading is level 1.</p>
            <p>To go to the next level, add "/?ans=level2" to the url.</p>
            `;
            break;
        case "level2":
            $("#level").html("Level 2");
            content = `
            <img style="width: 500px" src="level2.png">
            <p>Remember, the answer is written in all lowercase</p>`;
            break;
        case "sixteen":
            $("#level").html("Level 3");
            content = `<p>It spends most of its day eating white, but when it’s quick enough, it gets to eat fruit and sometimes some blue things.</p> 
            <p>It’s in a dark room, where the walls are blue, it runs from ghosts that roams the halls and haunts it all the time. What is it?</p>
            <p>Format: xxxxxx</p>`;
            break;
        case "pacman":
            $("#level").html("Level 4");
            content = `<p>"8-9-19-20-15-18-25 23-9-12-12 2-5 11-9-14-4 20-15 13-5 6-15-18 9 9-14-20-5-14-4 20-15 23-18-9-20-5 9-20" - ???</p>
            <p>12-1-19-20 14-1-13-5 15-14-12-25, 1-12-12 12-15-23-5-18-3-1-19-5</p>`;
            break;
        case "churchill":
            $("#level").html("Level 5");
            content = `<img style='width:500px;' src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Caesar_cipher_left_shift_of_3.svg/1920px-Caesar_cipher_left_shift_of_3.svg.png'>
            <p>F xj xk laa krjybo. Qxhb xtxv x ibqqbo xka F ybzljb bsbk. Texq krjybo xj F?</p>
             `;
            break;
        case "seven":
            $("#level").html("Level 6");
            content = `<img style='width: 500px' src="level6.png">
            <p> ► ► 1 ◄ ▼ ◄ 2 ▼ ► ► 3 ◄ ▲ ▲ 4 ▼ ► ▲ ◄ ◄ 5 ▼ ► ▼ 6 ▲ ▲ ► 7 ▼ ▼ 8 ◄ ◄ ▲ ▲ ► 9 ▼ 10</p>
            `;
            break;
        case "alternates":
            $("#level").html("Level 7");
            content = `<img style='width: 500px' src="level7.png"><br/>
            <img src="level7hint.png">
            <p>To be clear, format is x:xx</p>`;
            break;
        case "2:09":
            $("#level").html("Level 8");
            content = `<img style="width:150px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTUMEceBr6JB9DpdklcH5EyxjTOx130lz8LA&s">
            <p style="font-size: x-large;">49 57 6C 62 71 6B 54<br/>
            78 42 63 73 54 4C 73<br/>
            75 68 59 5A 6E 34 35<br/>
            46 4A 6B 71 51 35 31<br/>
            53 35 4C 32 50 33 71</p>`;
            break;
        case "crazy":
            $("#level").html("Level 9");
            content = `<p>Oh no, an error ocurred! It should be reported in the console...</p>`;
            console.log("01101000 01110100 01110100 01110000 01110011 00111010 00101111 00101111 01101001 01101101 01100111 01110101 01110010 00101110 01100011 01101111 01101101 00101111 01100001 00101111 01100011 01010111 00110110 01101010 01110111 01110000 00111000")
            break;
        case "reptile":
            $("#level").html("Level 10");
            content = `<p>puzzles have Fascina<strong>t</strong>ed people for centuries, offering a mIx <span style="color: #00ccff;">of</span> fun, c<strong>h</strong>allenge, and m<strong>e</strong>ntal stimulation. <em>f</em>rom ancient mazes to modern j<span style="color: #ff0000;">i</span>gsa<span style="text-decoration: underline;">w</span>s, they require logic, creativity, <strong>a</strong>nd patience, rewarding solVers with a sense <span style="text-decoration: underline;">o</span>f accompl<em>i</em>shme<strong>n</strong>t. with fo<span style="text-decoration: underline;">r</span>ms like crosswords, <strong>s</strong>udoku, and b<em>r</em>aintEasers, puzzles cater to <span style="text-decoration: underline;">d</span>ifferent <em>s</em>kills, sharp<strong>e</strong>ning problem-<span style="color: #ff0000;">s</span>olving abilities and boosting men<em>t</em>al sh<span style="color: #00ccff;">a</span>rpnes<span style="text-decoration: underline;">s</span>.</p>
            <p><span style="color: #ff0000;">the</span> appeaL of puzzles <em>l</em>ies in turning <span style="text-decoration: underline;">c</span>onfusion into clarity. Each piece or clu<em>e</em> revea<span style="color: #00ccff;">l</span>s part of a larger s<span style="text-decoration: underline;">o</span>lution, offering a ba<span style="color: #00ccff;">l</span>ance of challenge and reward. whe<em>t</em>her solving riddles or asse<span style="text-decoration: underline;">mb</span>ling jigsaws, puzzles are bo<em>t</em>h enTerTaining and educational, <span style="text-decoration: underline;">i</span>mproving critical thinking and fin<em>e</em> motor skills. in both physical a<span style="text-decoration: underline;">n</span>d digital fo<em>r</em>ms, th<span style="text-decoration: underline;">e</span>y continue to inspire <span style="text-decoration: underline;">d</span>iscovery and pERseverance.</p>
            <p>Order: <i class="fa fa-bold" aria-hidden="true"></i> <i style="color: #ff0000;" class="fa fa-square" aria-hidden="true"></i> <i class="fa fa-italic" aria-hidden="true"></i> <i style="color: #00ccff;" class="fa fa-square" aria-hidden="true"></i> <i class="fa fa-arrow-up" aria-hidden="true"></i> <i class="fa fa-underline" aria-hidden="true"></i></p>
            <p>P.S. When you decipher it, only consider the 2 paragraphs</p>`;
            //order is: bold, red, italic, blue, uppercase, underline
            //forms the phrase: theanswer isthe firstletter ofall fiveletter wordscombined.
            break;
        case "mlsfcpmf":
            $("#level").html("Level 11");
            content = `
            <img style="width:750px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Periodic_table_large.svg/2560px-Periodic_table_large.svg.png">
            <img src="level11.png"><br>
            <img style="height:100px" src="https://fevgames.net/wp-content/uploads/2015/09/Pokemon-GO-Pokedex.png">
            <p>Capitaliztion matters here</p>`
            break;
        case "PIRaTe":
            $("#level").html("Level 12");
            console.log("The answer isn't 'xxxx', in case you are wondering, go to Google Maps and think.")
            content =`<p>14.0937181,-87.2143691 → Xxxxxxxx</p>
            <p>12.6413269,-8.0019319 → xXxx</p>
            <p>30.6666897,104.0710326 → xxXxx</p>
            <p>40.6312503,-8.6563301 → xxXxxxxx</p>
            <p>Answer: XXXX</p>`;
            break;
        case "hair":
            $("#level").html("Level 13");
            content = `<p><img style="height: 25px;" src="https://flagicons.lipis.dev/flags/4x3/fr.svg">  -  1998  -  7th July Semi-final Match Winner</p>
            <p><img style="height: 25px;" src="https://flagicons.lipis.dev/flags/4x3/us.svg">  -  1994  -  Group A 1st Position</p>
            <p><img style="height: 25px;" src="https://flagicons.lipis.dev/flags/4x3/br.svg">  -  2014  -  2nd Place</p>
            <p><img style="height: 25px;" src="https://flagicons.lipis.dev/flags/4x3/mx.svg">  -  1986  -  Last in the third place rankings</p>
            <p><img style="height: 25px;" src="https://flagicons.lipis.dev/flags/4x3/uy.svg">  -  1930  -  Group 1 2nd Position</p>
            <p><img style="height: 25px;" src="https://flagicons.lipis.dev/flags/4x3/qa.svg">  -  2022  -  Letter of the group containing Portugal</p>
            <p>First letter of each</p>`;
            //brazil - romania - argentina - northern ireland - chile - h
            break;
        case "branch":
            $("#level").html("Level 14");
            content = `<img style="width: 500px;" src="level14.png">
            <p>Ignore the spaces and hyphens, its just the last letter of each</p>`;
            console.log("Here is some help");
            console.log("https://content.tfl.gov.uk/standard-tube-map.pdf");
            console.log("https://www.tmb.cat/documents/20182/45206/Pl%C3%A0nol+xarxa+de+Metro.pdf/f5578f40-5a66-46ba-907c-cf31e0d368c0?t=1731071400663");
            console.log("https://www.tokyometro.jp/station/pdf/202305/202305_number_en.pdf");
            break;
            //in notes.txt is the cheat sheet
        case "kloser":
            $("#level").html("Level 15");
            content = `
            <audio controls>
                <source src="level15.wav" type="audio/wav">
                Your browser does not support the audio element.
            </audio>`;
            console.log("You sneaky son of a b*tch. Fine, here some help:")
            console.log("https://morsecode.world/international/decoder/audio-decoder-adaptive.html")
            break;
        case "jackson":
            $("#level").html("Level 16");
            content = `You have reached the end, there are no more levels for now`
            break;
        default:
            $("#level").html("ERROR");
            content = `<p>That answer is incorrect, try again.</p>`;
    }
    $puzzle.append(content);
})
