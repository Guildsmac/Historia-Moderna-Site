function expandAboutUs(){
        let component = $('.card');
        if(component.is(':visible'))
            component.fadeOut(200);

        else
            component.fadeIn(200);
}