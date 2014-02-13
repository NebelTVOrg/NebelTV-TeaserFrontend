/**
 * Created by howtwizer on 23.12.13.
 */
function builderParcer(data){
    var parsedData =  eval('('+data+')');
    builder(parsedData);
}

function builder(parsedData) {

    var feedList = [];


    $(parsedData).each(function(index, feedItem) {
        feedList.push(
            '<div class="col-xs-12 col-sm-6 col-md-4">\
                <div class="feed-item">\
                    <div class="item-header">\
                        <span class="item-author">Item Author</span><span class="item-social"><span class="icon like"></span>'+(Math.floor(Math.random()*1000))+'<span class="icon comments"></span>'+(Math.floor(Math.random()*1000))+'</span>\
                    </div>\
                    <div class="item-body">\
                        <a href="http://nebel.tv/getVideoAssets?id=0"><img class="img-responsive" src="'+feedItem.image+'" alt=""/></a>\
                        <div class="item-time">'+feedItem.duration+'</div>\
                    </div>\
                    <div class="item-footer">\
                        <span class="item-title">'+feedItem.title+'</span>\
                        <span class="connection-speed fast '+feedItem.speed+' "> </span>\
                        <a class="dots" href="#showmore"> </a>\
                        <div class="more-dots"><button type="button" class="btn btn-primary btn-sm">Watch Later</button></div>\
                    </div>\
                </div>\
            </div>'
        );

    });


    $('#feedList').append(feedList);


    $('.feed-item-bottom').click(function(){
        $(this).closest('li').find('.feed-item-comments').toggle();
    });

    $('.dots').click(function(e){
        e.preventDefault();
        $('.more-dots').toggle('slow');
    });
}


$(document).ready(function(){

    $.getJSON(
        //"http://54.201.170.111:8080/IvaWrapperWeb/getMedias",
        "http://nebel.tv/getMedias",
        {
            skip: 100,
            n: 9,
            category: 0,
            callback: 'builderParcer'
        }, builderParcer



    );




});