jQuery.fn.visible = function() {
    return this.css('visibility', 'visible');
};
jQuery.fn.invisible = function() {
    return this.css('visibility', 'hidden');
};
$(document).ready(function() {
    $('.tabs').tabs();
    $('.sidenav').sidenav();
    $('.collapsible').collapsible();
    
    $('.collection > a').each(function() {
        let that = this
        $(this).click(function(e) {
            e.preventDefault()
            $('#AjaxLoading').show();
            $('#MainContent').invisible();
            $('#SideNav').invisible();
            $.ajax({
                url: that.href,
                method: "GET",
                success: data=>{
                    var x = $(data);
                    $('#MainContent').html(x.find('#MainContent').html())
                    $('#SideNav').html(x.find('#SideNav').html())
                    document.title=x.find('title').html()||document.title
                    
                    $('#MainContent').visible();
                    $('#SideNav').visible();
                    $('.tabs').tabs();
                    $('.sidenav').sidenav();
                    $('.collapsible').collapsible();
                    
                    $('#AjaxLoading').hide();
                }
            })
            
            
            history.pushState('', document.title, that.href)

            
        })
    })
})