        $(document).ready(function(){
            $('.certification-container').slick({
                slidesToShow: 3, // Number of items to show at a time
                slidesToScroll: 1, // Number of items to scroll
                autoplay: true, // Enable auto-sliding
                autoplaySpeed: 2000, // Auto-slide interval in milliseconds
                arrows: true, // Show navigation arrows
                dots: true, // Show pagination dots
                responsive: [
                    {
                        breakpoint: 768, // Adjust settings for smaller screens
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 480, // Adjust settings for even smaller screens
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            });
        });
    $(document).ready(function(){
        $('.slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            dots: true,
            arrows: true,
            /*
            prevArrow: '<button type="button" class="slick-prev">←</button>',
            nextArrow: '<button type="button" class="slick-next">→</button>',
           */ responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    });
        $(document).ready(function(){
            // Initialize the carousel for the flags section
            $('.carousel').slick({
                slidesToShow: 5, // Show 5 flags at a time
                slidesToScroll: 2, // Scroll 5 flags at a time
                autoplay: true, // Enable auto-sliding
                autoplaySpeed: 5000, // Auto-slide interval (5 seconds)
                arrows: true, // Show navigation arrows
                dots: true, // Show pagination dots
                responsive: [
                    {
                        breakpoint: 768, // Adjust for smaller screens
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3
                        }
                    },
                    {
                        breakpoint: 480, // Adjust for even smaller screens
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2
                        }
                    }
                ]
            });
    
            // Ensure other carousels on the page are not affected
            $('.certification-container').slick({
                // Your existing settings for the certifications carousel
            });
        });
        $(document).ready(function(){
            // Product Slider
            $('.slider').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000,
                dots: true,
                arrows: false,
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1
                        }
                    }
                ]
            });
        
            // Certifications Carousel
            $('.certification-container').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000,
                arrows: false,
                dots: true
            });
        
            // Flags Carousel
            $('.carousel').slick({
                slidesToShow: 2,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 5000,
                arrows: false,
                dots: true
            });
        });
        function toggleMenu() {
            const navLinks = document.querySelector('.nav-links');
            navLinks.classList.toggle('active');
        }