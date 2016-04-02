var twitchStreamers = [
  "freecodecamp", "storbeck", "terakilobyte", "habathcx","RobotCaleb","thomasballinger","noobs2ninjas", "brunofin",
  "comster404", 
  
];

$(document).ready(function(){
  
  createStreamers();
  
});

function createStreamers() {
  
  twitchStreamers.forEach(function(streamer){ 
     

var nameOfStreamer;
     var url;
     var viewers;
     var previewImage="";
     var tempHtml=previewImage;   
     var currentGame; 
     
      $.getJSON("https://api.twitch.tv/kraken/streams/"+streamer+"?callback=?", function(data){
        
     
        
      if(data.stream===null) {
        
        currentGame = "Streamer is offline";
        previewImage= "https://s-media-cache-ak0.pinimg.com/736x/69/7b/39/697b399ca80d1c688f7e517468e619c0.jpg";
        tempHtml = "<img class='img-responsive' src=' "+previewImage+" '>";
        viewers="no";
        
       
      }  
        else if(data.stream===undefined){
          currentGame="Account is deactivated";
          name = "";
          previewImage="https://support.squarespace.com/hc/en-us/article_attachments/204224118/account_removed.png"
          tempHtml = "<img class='img-responsive' src=' "+previewImage+" '>";
          
          
        }
        else{
          
          
          viewers= data.stream.viewers;
          previewImage = data.stream.preview.large;
          currentGame = data.stream.game;
          tempHtml = "<img class='img-responsive livePreview' src='" + previewImage + "'>";
          }
});

 $.getJSON('https://api.twitch.tv/kraken/channels/' + streamer + '?callback=?', function(data) {

        if (data.name === undefined) {
          name = "";
        } else {
          name = data.name;
          url = data.url;
        };

        var html = "<div class='img-responsive'>";
        html += "<div class='twitchview col-md-4'>";
        html += "<p><a target='_blank' href='" + url + "'>" + tempHtml  + "</a></p>";
        html += currentGame + "<br>";
        html += "<p><span class='grayText'>" + viewers + " viewers on " + name + "</span></p>";
        html += "</div></div>";
        
        $('.twitchContainer').append(html);









    
  });
                          });
  
}