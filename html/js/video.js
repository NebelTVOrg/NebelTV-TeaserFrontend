/**
 * Created by howtwizer on 23.12.13.
 */

/* Define Host
 * http://54.201.170.111:8080/IvaWrapperWeb - development version (browser testing)
 *
 * */
//var host = 'http://54.201.170.111:8080/IvaWrapperWeb';

var hash = window.location.hash;
var id = hash.replace("#","");


function builder(data) {

    var comments = [];
    var authors = [];
    var faces = [];
    var commentcount = [1,2,3,4,5,6,7,8,9];
    var commentshtml = [];
    $(data.feed.entry).each(function(index, feedItem) {

        comments[index] = feedItem['gsx$comment']['$t'];
        authors[index] = feedItem['gsx$commentsauthor']['$t'];
        faces[index] = feedItem['gsx$faces']['$t'];
    });

    //Generatin random comments quaintity
    var randomcount = commentcount[Math.floor(Math.random()*commentcount.length)];


//Generatin block or random comments/authors
    for (var i = 0; i < randomcount; i++) {
        var randomcomment = comments[Math.floor(Math.random()*comments.length)];
        var randomauthor = authors[Math.floor(Math.random()*authors.length)];
        var randomface = faces[Math.floor(Math.random()*faces.length)];
        var commentdate = '';
        if ( i >= 0 && i <=1){
            commentdate = 'Today';
        } else if (i >= 2 && i <=3){
            commentdate = 'Yesterday';
        } else if (i >= 4 && i <=7){
            commentdate = '1 Day ago';
        } else {
            commentdate = '2 Days ago';
        }
        commentshtml.push(
            '<li>\
            <img class="avatar" src="'+randomface+'" alt="ava"/>\
                <span class="comment-author">'+randomauthor+'&nbsp;&#8226;&nbsp;</span>'+commentdate+'\
                <p class="comment">'+randomcomment+'</p>\
            </li>');

    }


    var movie = [];



        var feedItem = data.feed.entry[id];

        var tags = feedItem['gsx$tags']['$t'];
        if (tags !=''){
            tags = '<span class="tag"><a class="brown" href="#tag1">' + tags.replace(/,/gi,'</a></span><span class="tag"><a class="brown" href="#tag2">') + '</a></span>';
        }
        var name = feedItem['gsx$name']['$t'];
        var imageLink = feedItem['gsx$coverimage']['$t'];
        var imdb =  feedItem['gsx$imdbrating']['$t'];
        var description = feedItem['gsx$description']['$t'];
        var broadcast = feedItem['gsx$broadcast']['$t'];
        var haveseries = feedItem['gsx$haveseries']['$t'];

    var series = '';

    if (haveseries == 1){
        series = '<ul class="episodes cycle-slideshow" data-cycle-fx="carousel" data-cycle-timeout="0" data-cycle-slides="> li" data-cycle-swipe="true">' +
            '<li><img  class="img-responsive" src="'+imageLink+'"><h6>Episode 1</h6></li>' +
            '<li><img  class="img-responsive" src="'+imageLink+'"><h6>Episode 2</h6></li>' +
            '<li><img  class="img-responsive" src="'+imageLink+'"><h6>Episode 3</h6></li>' +
            '<li><img  class="img-responsive" src="'+imageLink+'"><h6>Episode 4</h6></li>' +
            '<li><img  class="img-responsive" src="'+imageLink+'"><h6>Episode 5</h6></li>' +
                  '</ul>';

    }else{
        series = '';
    }

    movie.push(
            '<div class="col-xs-12 col-sm-6 col-md-4">\
                <div class="movie-item">\
                    <div class="item-header">\
                        \
                    </div>\
                    <div class="item-body">\
                              <img  class="img-responsive" src="'+imageLink+'">\
                             <a class="play" href="http://nebel.tv/wrapper/getVideoAssets?id=0#play"><span class="glyphicon glyphicon-play"></span></a>\
                    </div>\
                    <div class="item-footer">\
                        <div class="video-title row">\
                        <div class="col-xs-10 title-holder">\
                            <span class="item-title">'+name+'</span>'+tags+'\
                        </div>\
                        <div class="col-xs-2">\
                           <span class="connection-speed "> </span>\
                        </div>\
                       </div>\
                       <div class="video-social">\
                       <span class="item-social"><span class="icon icon-like"></span>'+(Math.floor(Math.random()*10))+'   <span class="icon icon-comments"></span>'+randomcount+'</span>\
                       </div>\
                       \
                           <span class="item-author" style="background: url(images/hromadske-icon.png) left no-repeat;">'+broadcast+' </span>\
                       <a class="watch-later">+ Watch Later</a>\
                       <div class="clearfix"></div>\
                    </div>\
                   '+series+'\
                    <div class="description">\
                        <h4>Details</h4>\
                        <span>IMDB Rating:</span><br>\
                        <span class="rating">\
                            <span class="glyphicon glyphicon-star"></span>\
                            <span class="glyphicon glyphicon-star"></span>\
                            <span class="glyphicon glyphicon-star"></span>\
                            <span class="glyphicon glyphicon-star"></span>\
                            <span class="glyphicon glyphicon-star-empty"></span>\
                            '+imdb+'</span>\
                                <div class="text">\
                                    <p>'+description+'</p>\
                                    <div class="shadow-mask"></div>\
                                </div>\
                            <a class="showmore text-right" href="#"><span>Show More</span></a>\
                         </div>\
                    <div class="comments">\
                    <h4>Comments&nbsp;<span class="count">'+randomcount+'</span></h4>\
                    <ul id="comments-list"> </ul>\
                    </div>\
                </div>\
            </div>'
        );







    $('#movie-overview').append(movie);
    $('#comments-list').append(commentshtml);


    $('.dots').click(function(e){
        e.preventDefault();
        $(this).next('.more-dots').toggle('slow');
    });
    var textheight = $('.text p').height();

    if(textheight > 75) {
        $('.text p').css('height', 100);
        $('.shadow-mask').show();
        $('.showmore').css('display', 'block');
    }
    $('.showmore').click(function(e){
        e.preventDefault();
        $('.text p').css('height', 'auto');
        $(this).hide();
            $('.shadow-mask').hide();
    });
    $('.cycle-slideshow').cycle();
}


$(document).ready(function(){


    $.getJSON("http://cors.io/spreadsheets.google.com/feeds/list/0AirkLgmZ4th5dHlHeVJBZGlWQjBGTFprM0gzT1pKamc/od6/public/values?alt=json", builder);



});