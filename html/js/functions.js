/**
 * Created by howtwizer on 23.12.13.
 */
function contentheight(){
    var contentheight = $(document).height();
    $('.content').height( contentheight );
}

$(window).bind('resize', function(){
    contentheight();
});

$(document).ready(function(){

    contentheight();



    $.getJSON(
        "http://dstworks.com:8080/IvaWrapperWeb/getMedias",
        {
            category: 1
        },
        function(data) {
            var feedList = [];


            $(data).each(function(index, feedItem) {
                feedList.push(
                    '<li class="item">\
                        <div class="feed-item-info">\
                        <a href="http://mirrorblender.top-ix.org/peach/bigbuckbunny_movies/big_buck_bunny_480p_h264.mov"><img src="http://www.bigbuckbunny.org/wp-content/uploads/dl_480p.jpg" alt="" /></a>\
						<h5>'+feedItem.title+'</h5>\
						<span class="feed-item-instant">Instant</span>\
						<span class="feed-item-time">02:45:07</span>\
						<span class="feed-item-imdb">'+((Math.random()*10).toFixed(1))+'</span>\
						<span class="feed-item-rating"><span style="width: '+((Math.random()*100).toFixed(1))+'%"></span></span>\
						<div class="feed-item-descr">'+feedItem.descr+'</div>\
						<div class="feed-item-author-info">\
							<span class="feed-item-author">Витя Охрименко '+feedItem.author+'</span>\
							<span class="feed-item-date">'+feedItem.date+'</span>\
							<div>Здесь сообщение от френда, который поделился этим медиа контентом Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor</div>\
							<img class="feed-item-author-photo" src="https://pp.vk.me/c313225/v313225380/2bd4/cnVjs4x6oO0.jpg">\
						</div>\
						<div class="feed-item-bottom">\
							<div class="feed-item-bottom-right">\
								<span class="feed-item-icon-likes">'+(Math.floor(Math.random()*1000))+'</span>\
								<span class="feed-item-icon-comments">'+(Math.floor(Math.random()*100))+'</span>\
							</div>\
							<span>Tags: ● San diego, ● David koechner</span>\
						</div>\
					</div>\
					<div class="feed-item-comments">\
						<div class="feed-item-comment">\
							<img src="https://pp.vk.me/c313225/v313225380/2bd4/cnVjs4x6oO0.jpg" alt="" />\
							<h6>Joe Cocker</h6>\
							Здесь комменты от какого-то непонятного чела, который поделился этим медиа контентом Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor \
						</div>\
						<div class="feed-item-comment feed-item-comment-answer">\
							<img src="https://pp.vk.me/c313225/v313225380/2bd4/cnVjs4x6oO0.jpg" alt="" />\
							<h6>Joe Cocker</h6>\
							Здесь комменты от какого-то непонятного чела, который поделился этим медиа контентом Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor \
						</div>\
						<div class="feed-item-comment">\
							<img src="https://pp.vk.me/c313225/v313225380/2bd4/cnVjs4x6oO0.jpg" alt="" />\
							<h6>Joe Cocker</h6>\
							Здесь комменты от какого-то непонятного чела, который поделился этим медиа контентом Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor \
						</div>\
					</div>\
				</li>');
            });

            var resentList = [];

            $(data).each(function(index, feedItem) {
                resentList.push(
                    '<li class="item" style="background: url(\' http://www.bigbuckbunny.org/wp-content/uploads/dl_480p.jpg \') 100%/100% no-repeat;">\
                        <div class="coverbg" ></div>\
                        <div class="feed-item-info">\
						<h5>'+feedItem.title+'</h5>\
						<span class="feed-item-instant">Instant</span>\
						<span class="feed-item-time">12:45:07</span>\
						<span class="feed-item-imdb">'+((Math.random()*10).toFixed(1))+'</span>\
						<span class="feed-item-rating"><span style="width: '+((Math.random()*100).toFixed(1))+'%"></span></span>\
						<div class="feed-item-descr">'+feedItem.descr+'</div>\
						<div class="feed-item-author-info">\
							<span class="feed-item-author">Витя Охрименко '+feedItem.author+'</span>\
							<span class="feed-item-date">'+feedItem.date+'</span>\
							<div>Здесь сообщение от френда, который поделился этим медиа контентом Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor</div>\
							<img class="feed-item-author-photo" src="https://pp.vk.me/c313225/v313225380/2bd4/cnVjs4x6oO0.jpg">\
						</div>\
						<div class="feed-item-bottom">\
							<div class="feed-item-bottom-right">\
								<span class="feed-item-icon-likes">'+(Math.floor(Math.random()*1000))+'</span>\
								<span class="feed-item-icon-comments">'+(Math.floor(Math.random()*100))+'</span>\
							</div>\
							<span>Tags: ● San diego, ● David koechner</span>\
						</div>\
					</div></li>');
            });

            //alert (feedList);

            $('#feedList').append(feedList);
            //$(feedList).appendTo($('#feedList'));

            $('.feed-item-bottom').click(function(){
                $(this).closest('li').find('.feed-item-comments').toggle();
            });
            $('#resentList').append(resentList);
           // feedList.appendTo('#someList');
        }
    );

});