

document.addEventListener('DOMContentLoaded', function () {
    let loader = document.querySelector('.loader');
    window.addEventListener('load', function () {
        loader.style.display = 'none';
    });

    let header_nav = document.querySelector('.header-nav');
    let lastScrollTop = 0;
    window.addEventListener('scroll', function () {

        let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScroll > lastScrollTop) {
            header_nav.classList.add('hide');

        } else {
            header_nav.classList.remove('hide');
        }



        lastScrollTop = currentScroll;

    });


    let icons = document.querySelectorAll('.icon-link');
    let services = document.querySelectorAll('.card');

    let callback = (entries, _) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                icons.forEach(icon => {
                    icon.classList.add('icon-link-show');
                });
            }

        });
    }

    let servicesCallback = (entries, _) => {
        entries.forEach(entry => {
            services.forEach(service => {
                service.classList.toggle('service-card-show', entry.isIntersecting);
            });
        });
    }


    let options = {
        root: null,
        threshold: 0,
        rootMargin: '400px 0px 0px 0px',
    }

    let landingPageObserver = new IntersectionObserver(callback)
    let servicesObserver = new IntersectionObserver(servicesCallback, options)

    landingPageObserver.observe(document.querySelector('.landing-page'))
    servicesObserver.observe(document.querySelector('.services'))

    let smartAuthProject = document.querySelector('.first-project');
    let smartAuthLinkes = document.querySelectorAll('.link-smart-auth');

    let smartAuthProjectObserver = new IntersectionObserver((entries, _) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                smartAuthLinkes.forEach(link => {
                    link.classList.add('link-smart-auth-show');
                });
            } else {
                smartAuthLinkes.forEach(link => {
                    link.classList.remove('link-smart-auth-show');
                });
            }
        });
    });

    smartAuthProjectObserver.observe(smartAuthProject);


    let carAllocationProject = document.querySelector('.second-project');
    console.log(carAllocationProject);
    let carAllocationLinks = document.querySelectorAll('.link-car-allocation');


    let secondObserver = new IntersectionObserver((entries, _) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                carAllocationLinks.forEach(link => {
                    link.classList.add('link-smart-auth-show');
                });
            } else {
                carAllocationLinks.forEach(link => {
                    link.classList.remove('link-smart-auth-show');
                });
            }
        });
    });


    secondObserver.observe(carAllocationProject);


    let weatherProject = document.querySelector('.third-project');


    let weatherLinks = document.querySelectorAll('.weather-station');

    let observer = new IntersectionObserver((entries, _) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                weatherLinks.forEach(link => {
                    link.classList.add('link-smart-auth-show');
                });
            } else {
                weatherLinks.forEach(link => {
                    link.classList.remove('link-smart-auth-show');
                });
            }
        });
    });


    observer.observe(weatherProject);



    let toggleButton = document.getElementById('toggle-icon');

    toggleButton.addEventListener('click', function () {
        let navList = document.querySelector('nav > ul.menu-links');
        navList.classList.toggle('show-menu');
        console.log(navList);
    });

    document.body.addEventListener('click', function (e) {
        if (e.target.id !== toggleButton.id) {
            console.log('clicked');
            let navList = document.querySelector('nav > ul.menu-links');
            navList.classList.remove('show-menu');
        }
    });


    let submitButton = document.getElementById('submit-btn');

    submitButton.addEventListener('click', function (e) {
        e.preventDefault();
        let form = document.getElementById('form-mail');
        let name = document.getElementById('name');
        let email = document.getElementById('email');
        let message = document.getElementById('content');
        let alert = document.getElementById('alert-mail');

        if (name.value === '' || email.value === '' || message.value === '') {
            alert.classList.add('show');
            return;
        }

        if (!email.value.includes('@') || !email.value.includes('.')) {
            alert.classList.add('show');
            return;
        }

        window.open(`mailto:essid101010@gmail.com?subject=Mail From ${name.value}&body=${message.value}`)
        console.log(name.value, email.value, message.value);
        name.value = '';
        email.value = '';
        message.value = '';
    });



    let buttonClose = document.getElementById('close');
    buttonClose.addEventListener('click', function (e) {
        let alert = document.getElementById('alert-mail');
        alert.classList.remove('show');
    });

    let reset = document.getElementById('reset');
    reset.addEventListener('click', function (e) {
        let form = document.getElementById('form-mail');
        e.preventDefault();
        let name = document.getElementById('name');
        let email = document.getElementById('email');
        let message = document.getElementById('content');
        name.value = '';
        email.value = '';
        message.value = '';

        let alert = document.getElementById('alert-mail');
        alert.classList.remove('show');
    });

});

