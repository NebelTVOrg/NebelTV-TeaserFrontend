/**
 * Created by howtwizer on 23.12.13.
 */

/* Define Host
 * http://54.201.170.111:8080/IvaWrapperWeb - development version (browser testing)
 *
 * */
//var host = 'http://54.201.170.111:8080/IvaWrapperWeb';



function builder(data) {

      //console.log(data);
   // console.log(data.feed.entry[0]['gsx$title']['$t']);

    var authors = [];
    var feedList = [];

    $(data.feed.entry).each(function(index, feedItem) {
        var ind = index;
        authors[index] = feedItem['gsx$commentsauthor']['$t'];
        var tags = feedItem['gsx$tags']['$t'];
        if (tags !=''){
        tags = '<span class="tag"><a class="brown" href="#tag1">' + tags.replace(/,/gi,'</a></span><span class="tag"><a class="brown" href="#tag2">') + '</a></span>';
        }
        var name = feedItem['gsx$name']['$t'];
        var imageLink = feedItem['gsx$coverimage']['$t'];
        var localImage = feedItem['gsx$coverfile']['$t'];
        var randomauthor = authors[Math.floor(Math.random()*authors.length)];
        feedList.push(
            '<div class="col-xs-12 col-sm-6 col-md-4 col">\
                <div class="feed-item video item-'+ index +'">\
                    <div class="item-header">\
                        <span class="item-author" style="background: url(images/hromadske-icon.png) left no-repeat;">'+randomauthor+'</span><span class="item-social"><span class="icon icon-like"></span>'+(Math.floor(Math.random()*10))+'   <span class="icon icon-comments"></span>'+(Math.floor(Math.random()*10))+'</span>\
                    </div>\
                    <div class="item-body">\
                        <div class="cycle-slideshow img-responsive" data-cycle-slides="> a" data-cycle-timeout="0" data-cycle-swipe="true" >\
                                <a class="itemimg" style="background-image: url(items/covers/'+localImage+');" href="video-item.html#'+index+'"></a>\
                        </div>\
                        <a class="item-action" href="http://nebel.tv/wrapper/getVideoAssets?id=0#play"><span class="glyphicon glyphicon-facetime-video"></span> Play</a>\
                    </div>\
                    <div class="item-footer row">\
                        <div class="col-xs-10 title-holder">\
                        <span class="item-title">'+name+'</span>'+tags+'\
                        </div>\
                        <div class="col-xs-2">\
                           <span class="connection-speed "> </span>\
                        <a class="dots" href="#showmore">\
                        </a>\
                        <div class="more-dots"><button type="button" class="watch-later">+ Watch Later</button></div>\
                        </div>\
                    </div>\
                </div>\
            </div>'
        );
        if (index == 3){
            feedList.push(
                '<div class="col-xs-12 col-sm-6 col-md-4 col">\
                    <div class="feed-item music item-'+ index +'">\
                    <div class="item-header">\
                        <span class="item-author" style="background: url(images/hromadske-icon.png) left no-repeat;">'+randomauthor+'</span><span class="item-social"><span class="icon icon-like"></span>'+(Math.floor(Math.random()*10))+'   <span class="icon icon-comments"></span>'+(Math.floor(Math.random()*10))+'</span>\
                    </div>\
                    <div class="item-body">\
                        <div class="cycle-slideshow img-responsive" data-cycle-slides="> a" data-cycle-timeout="0" data-cycle-swipe="true" >\
                            <a class="itemimg" style="background-image: url(items/mp3//okeanelzi-zemla-cover.jpg);" href="music-item.html#'+index+'"></a>\
                            \
                        </div>\
                        <a class="item-action" href="music-item.html#'+index+'"><span class="glyphicon glyphicon-music"></span> Listen</a>\
                    </div>\
                    <div class="item-footer row">\
                        <div class="col-xs-10 title-holder">\
                            <span class="item-title">Okean Elzy — Zemlya</span><span class="tag"><a class="brown" href="#tag1">Rock</a></span>\
                        </div>\
                        <div class="col-xs-2">\
                            <span class="connection-speed "> </span>\
                            <a class="dots" href="#showmore">\
                            </a>\
                            <div class="more-dots"><button type="button" class="watch-later">+ Watch Later</button></div>\
                        </div>\
                    </div>\
                </div>\
            </div>');
        }
        if (index == 4){
            feedList.push(
                '<div class="col-xs-12 col-sm-6 col-md-4 col">\
                    <div class="feed-item picture item-'+ index +'">\
                    <div class="item-header">\
                        <span class="item-author" style="background: url(images/hromadske-icon.png) left no-repeat;">'+randomauthor+'</span><span class="item-social"><span class="icon icon-like"></span>'+(Math.floor(Math.random()*10))+'   <span class="icon icon-comments"></span>'+(Math.floor(Math.random()*10))+'</span>\
                    </div>\
                    <div class="item-body">\
                        <div class="cycle-slideshow img-responsive" data-cycle-slides="> a" data-cycle-timeout="0" data-cycle-swipe="true" >\
                            <a class="itemimg" style="background-image: url(items/images/demo1.jpg);" href="picture-item.html#'+index+'"></a>\
                            \
                        </div>\
                        <a class="item-action" href="picture-item.html#'+index+'"><span class="glyphicon glyphicon-picture"></span> Watch</a>\
                    </div>\
                    <div class="item-footer row">\
                        <div class="col-xs-10 title-holder">\
                            <span class="item-title">Star Wars Photo set</span><span class="tag"><a class="brown" href="#tag1">chubaka</a></span>\
                        </div>\
                        <div class="col-xs-2">\
                            <span class="connection-speed "> </span>\
                            <a class="dots" href="#showmore">\
                            </a>\
                            <div class="more-dots"><button type="button" class="watch-later">+ Watch Later</button></div>\
                        </div>\
                    </div>\
                </div>\
            </div>');
        }
    });


    $('#feedList').append(feedList);

    $('.feed-item-bottom').click(function(){
        $(this).closest('li').find('.feed-item-comments').toggle();
    });
    $('.dots').click(function(e){
        e.preventDefault();
        $(this).next('.more-dots').toggle('slow');

    });


    //$('.cycle-slideshow').cycle();
}


$(document).ready(function(){
    storage=$.localStorage;
    $.getJSON("http://cors.io/spreadsheets.google.com/feeds/list/0AirkLgmZ4th5dHlHeVJBZGlWQjBGTFprM0gzT1pKamc/od6/public/values?alt=json", builder);


});