/**
 * Created by howtwizer on 23.12.13.
 */

/* Define Host
 * http://54.201.170.111:8080/IvaWrapperWeb - development version (browser testing)
 *
 * */
var host = 'http://nebeltv.org';



function secondsToTime(secs)
{
    secs = Math.round(secs);
    var hours = Math.floor(secs / (60 * 60));

    var divisor_for_minutes = secs % (60 * 60);
    var minutes = Math.floor(divisor_for_minutes / 60);

    var divisor_for_seconds = divisor_for_minutes % 60;
    var seconds = Math.ceil(divisor_for_seconds);
    if (hours < 10) {hours = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
// This formats your string to HH:MM:SS
    var t = hours+":"+minutes+":"+seconds;

    return t;
}



function builderParcer(data)
{
 	var parsedData =  eval('('+data+')');
 	builder(parsedData);
}



function builder(parsedData) {

    var feedList = [];


    $(parsedData).each(function(index, feedItem) {

        var dur = secondsToTime(feedItem.StreamLengthinseconds);

        feedList.push(
            '<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">\
                <div class="feed-item">\
                    <div class="item-header">\
                        <span class="item-author">Item Author</span><span class="item-social"><span class="icon like"></span>'+(Math.floor(Math.random()*1000))+'<span class="icon comments"></span>'+(Math.floor(Math.random()*1000))+'</span>\
                    </div>\
                    <div class="item-body">\
                        <a href="'+host+'/getVideoAssets?id='+feedItem.Publishedid+'"><img class="img-responsive" src="'+feedItem.VideoAssetScreenCapture.URL+'" alt=""/></a>\
                        <div class="item-time">'+dur+'</div>\
                    </div>\
                    <div class="item-footer">\
                        <span class="item-title">'+feedItem.DisplayTitle+'</span>\
                        <span class="connection-speed fast '+feedItem.speed+' "> </span>\
                        <a class="dots" href="#showmore">\
                        </a>\
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
        $(this).next('.more-dots').toggle('slow');
    });

}


$(document).ready(function(){

    $.getJSON(
        host+'/getMedias',
        {
            skip: 100,
            n: 9,
            category: 27,
            callback: 'builderParcer'
        }, builder



    );
});