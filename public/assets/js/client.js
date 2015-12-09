function create_event(){
	title = $("#event_title").val(); 
	desc = $("#event_desc").val(); 
	$.ajax({ 
    	type: 'GET',
    	url: "/create_event", 
    	data: { event_title: title, event_desc: desc }, 
    	dataType: 'json',
    	success: function(result){
            console.log(result)
        	if(result){
        		window.location.replace("eventpage.html")
        	}
    	}
    });
}