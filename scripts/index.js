setInterval(()=>{
    current = $('.profile-img:not(.invisible)')
    next = current.next().length > 0 ? current.next() : $('.profile-img').first()
    current.addClass('invisible')
    next.removeClass('invisible')
}, 4000)


if (localStorage.getItem("theme")  == "dark"){
    $('html').attr('data-theme', 'dark')
}else if(localStorage.getItem("theme")  == "light"){
    $('html').removeAttr('data-theme')
}else{
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        $('html').attr('data-theme', 'dark')
    }
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
        if(event.matches){
            $('html').attr('data-theme', 'dark')
        }else{
            $('html').removeAttr('data-theme')
        }
    });
}

$('#dark-light-toggle').click(()=>{        
    if($('html').attr('data-theme') == 'dark'){
        $('html').removeAttr('data-theme')
        localStorage.setItem("theme", 'light')
    }else{
        $('html').attr('data-theme', 'dark')
        localStorage.setItem("theme", 'dark')
    }
})
