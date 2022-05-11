
    $(document).ready(function() {

        $('.logos .owl-carousel').owlCarousel({
            loop: true,
            rtl:true,
            margin: 10,
            autoplay: true,
            responsive: {
                0: {
                    items: 3
                },
                600: {
                    items: 4
                },
                1000: {
                    items: 6
                }
            }
        });

        $('.owl-carousel').owlCarousel({
            loop: false,
            margin: 10,
            autoplay: false,
            responsive: {
                0: {
                    items: 1
                },

                700: {
                    items: 2
                },
                1000: {
                    items: 2
                },
                1120: {
                    items: 3
                }
            }
        });

        textNewProduct = "";
        $.getJSON("JSON/sliderProducts.json").done(function(data) {
            $.each(data.sliderProducts, function(key, val) {
                textNewProduct = `<div class="case-study-box mr-2 mb-2" style="direction: rtl">
                                <img data-src="https://media.pakfactory.com/media_upload/coding_guide/home-page/home-img-ind-09.jpg" alt="" class="owl-lazy" loading="lazy" src="${val.img}" style="opacity: 1;" >
                                <div class="case-study-box-des text-right p-4">
                                    <h5>${val.title}</h5>
                                    <a class="icon-read-more " href="/custom-cannabis-packaging-boxes.html">جزئیات</a>
                                </div>
                            </div>`;
                $(textNewProduct).appendTo(".owl-carousel");
                textNewProduct = "";
            });



            $(" .owl-carousel").owlCarousel({
                loop: false,
                margin: 10,
                autoplay: false,
                responsive: {
                    0: {
                        items: 2
                    },

                    700: {
                        items: 3
                    },
                    1000: {
                        items: 5
                    },
                    1120: {
                        items: 6
                    }
                }
            });
        });

        $.getJSON("JSON/sliderStories.json").done(function(data) {
            $.each(data.sliderStories, function(key, val) {
                textNewProduct = `<div class="case-study-box mr-2 mb-2" style="direction: rtl">
                                <img data-src="https://media.pakfactory.com/media_upload/coding_guide/home-page/home-img-ind-09.jpg" alt="" class="owl-lazy" loading="lazy" src="${val.img}" style="opacity: 1;" >
                                <div class="case-study-box-des text-right p-4">
                                    <h5>${val.title}</h5>
                                    <a class="icon-read-more " href="/custom-cannabis-packaging-boxes.html">بیشتر</a>
                                </div>
                            </div>`;
                $(textNewProduct).appendTo(" .owl-carousel");
                textNewProduct = "";
            });



            $(".sliderStories .owl-carousel").owlCarousel({
                loop: false,
                margin: 10,
                autoplay: false,
                responsive: {
                    0: {
                        items: 2
                    },

                    700: {
                        items: 3
                    },
                    1000: {
                        items: 5
                    },
                    1120: {
                        items: 6
                    }
                }
            });
        });

    });