var songs = [];
var revision = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

songs.unshift("Love Is A Losing Game > by Amy Winehouse on the album Back to Black");
songs.push("Ice Princess > by Azealia Banks on the album Broke With Expensive Taste");

for (var i = 0; i <= songs.length; i++) {
    revision[i] = 
      songs[i].replace(">", "</p><p>")
      .replace("*", "")
      .replace("@", "")
      .replace("(", "")
      .replace("!", "")
      .replace("by", "")
      .replace("on the album", "|")
    var music = document.getElementById("main2");
    music.innerHTML += "<div class='java-styling'><p id='title'>" + revision[i] + "</p></div>";
}
