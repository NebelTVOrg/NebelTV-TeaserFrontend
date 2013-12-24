/**
 * Created by howtwizer on 23.12.13.
 */

$(document).ready(function()
{
    $.getJSON(
        "http://dstworks.com:8080/IvaWrapperWeb/getMedias",
        {
            category: 1
        },
        function(data) {
            var feedList = [];
            $(data).each(function(index, feedItem) {
                feedList.push(
                    '<li>\
                        <div class="feed-item-info">\
                            <a href="media/'+feedItem.media_id+'"><img src="'+feedItem.image+'" alt="" /></a>\
						<h5>'+feedItem.title+'</h5>\
						<span class="feed-item-instant">Instant</span>\
						<span class="feed-item-time">02:45:07</span>\
						<span class="feed-item-imdb">'+((Math.random()*10).toFixed(1))+'</span>\
						<span class="feed-item-rating"><span style="width: '+((Math.random()*100).toFixed(1))+'%"></span></span>\
						<div class="feed-item-descr">'+feedItem.descr+' ЗДЕСЬ ОПИСАНИЕ МЕДИА КОНТЕНТА Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>\
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
            //alert (feedList);

            $('#feedList').append(feedList);
            //$(feedList).appendTo($('#feedList'));

            $('.feed-item-bottom').click(function(){
                $(this).closest('li').find('.feed-item-comments').toggle();
            });
            $('#someList').append(feedList);
           // feedList.appendTo('#someList');
        }
    );
});
