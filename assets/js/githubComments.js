var xmlhttp;
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }


xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
      var messages =JSON.parse(xmlhttp.responseText);
      var object = "";
      object += "<hr>" +
        "<div class=\"comments_info\">" +
          messages.length + " comments on this article" +
        "</div>";
      object += "<ul>";

      var message = null;
      for (var i = 0; i < messages.length; i++){
        message = messages[i];
           object +=
             "<li>" +
                "<a href=\"" + message.user.html_url + "\" target=\"_blank\">" +
                  "<image class=\"comment_avatar\" src=\"" + message.user.avatar_url + "\"/>" +
                "</a>"+
                "<div class=\"comment_text_container\">" +
                  "<div class=\"comment_text_header\">" +
                    "<a href=\"" + message.user.html_url + "\" target=\"_blank\">"+ message.user.login + "</a>" +
                    " commented on " + new Date(message.updated_at).toLocaleDateString() + " at "+ new Date(message.updated_at).toLocaleTimeString() +
                  "</div>" +
                  "<div class=\"comment_text_body\">" +
                    message.body +
                  "</div>" +
                "</div>" +
            "</li>";
      }
      object += "</ul>";
      document.getElementById("GithubComments").innerHTML = object;
    }
  };
xmlhttp.open("GET","https://api.github.com/repos/hanfi/hanfi.github.io/commits/378b7e36de1e8d5ba9c0d06ef48fe00fa15759ed/comments",true);
xmlhttp.send();
