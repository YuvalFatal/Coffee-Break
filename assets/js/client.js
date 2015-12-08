function create_event(){
	title = $("#event_title").val(); 
	desc = $("#event_desc").val(); 
	$.ajax({ 
    	type: 'GET',
    	url: "http://127.0.0.1:8081/create_event", 
    	data: { event_title: title, event_desc: desc }, 
    	dataType: 'json',
    	success: function(result){
        	if(result){
        		window.location.replace("eventpage.html")
        	}
    	}
    });
}