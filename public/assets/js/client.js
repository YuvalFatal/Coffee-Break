function create_event(){
    title = $("#event_title").val(); 
    desc = $("#event_desc").val(); 

    $.ajax({ 
        type: 'GET',
        url: "/create_event", 
        data: { event_title: title, event_desc: desc }, 
        dataType: 'json',

        success: function(result){
            if(result && result["event_title"] && result["event_desc"]){
                $("#change_header").html("<p>Title: <h4>"+ result["event_title"]+"</h4></p>");
                $("#change_header").append("<p>Description: <h4>"+ result["event_desc"]+"</h4></p>")
                $("#change_header").append("</br><h3>Your event has been created!</h3>")
            }
        }
    });
}


function get_events(){
    $.ajax({ 
        type: 'GET',
        url: "/get_events", 
        data: {}, 
        dataType: 'json',

        success: function(result){
            if(result && result.length){
                $("#change_header").html(""); 

                for (var i = 0; i < result.length; i++){
                    event = result[i];
                    $("#change_header").append("<h3><a href='#' onclick='join_chat_check(" + i + ")'>"+ event[0] + "</a></h3>");
                    $("#change_header").append("<p>" + event[1] + "</p><hr>");
                }
            }
        }
    });
}


function join_chat_check(num_event){
    $("#change_header").html("<p>Your Name:</p> <input type='text' id='name'>"); 
    $("#change_header").append("<p>Do you want to join the event?<p>"); 
    $("#change_header").append("<input type='submit' onclick='back_to_feed()' value='No'></br>");
    $("#change_header").append("</br><input type='submit' onclick='join_chat( " + num_event + ")' value='Yes'>");
}


function back_to_feed(){
    window.location.replace("feed.html");
}


function join_chat(Num_event){
    var Name = $("#name").val();

    $.ajax({ 
        type: 'GET',
        url: "/join_chat", 
        data: {user_name: Name, num_event: Num_event}, 
        dataType: 'json',

        success: function(result){
            if (result){
                get_chat(Num_event);
            }
        }
    });
}


function get_chat(Num_event){
    $.ajax({ 
        type: 'GET',
        url: "/get_chat", 
        data: {num_event: Num_event}, 
        dataType: 'json',

        success: function(result){
            if(result && result.length){
                $("#change_header").html(""); 
                $("#change_header").append("<h3>Members In Event:</h3>"); 

                for (var i = 0; i < result.length; i++){
                    $("#change_header").append("<p>"+ result[i] + "</p>");
                }
            }
        }
    });
}