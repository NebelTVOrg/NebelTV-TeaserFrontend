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


    var music = [];


    music.push(
        '<div class="col-xs-12 col-sm-6 col-md-4">\
            <div class="music-item">\
                <div class="item-header">\
                        \
                    </div>\
                    <div class="item-body">\
                              <img  class="img-responsive" src="items/mp3//okeanelzi-zemla-cover.jpg">\
                             <a class="play" href="#play"><span class="glyphicon glyphicon-play"></span></a>\
                    </div>\
                    <div class="item-footer">\
                        <div class="video-title row">\
                        <div class="col-xs-10 title-holder">\
                            <span class="item-title">Okean Elzy — Zemlya</span><span class="tag"><a class="brown" href="#tag1">Rock</a></span>\
                        </div>\
                        <div class="col-xs-2">\
                           <span class="connection-speed "> </span>\
                        </div>\
                       </div>\
                       <div class="video-social">\
                       <span class="item-social"><span class="icon icon-like"></span>'+(Math.floor(Math.random()*10))+'   <span class="icon icon-comments"></span>'+randomcount+'</span>\
                       </div>\
                           <span class="item-author" style="background: url(images/hromadske-icon.png) left no-repeat;">Okean Elzi Broadcast </span>\
                       <a class="watch-later">+ Watch Later</a>\
                       <div class="clearfix"></div>\
                    </div>\
                    <div class="tracklist">\
                    <table>\
                        <tr>\
                            <td>З нею</td>\
                            <td>3:30</td>\
                            <td><a class="play-track" href="#play-track"><span class="glyphicon glyphicon-play"></span></a></td>\
                        </tr>\
                        <tr>\
                            <td>З нею</td>\
                            <td>3:30</td>\
                            <td><a class="play-track" href="#play-track"><span class="glyphicon glyphicon-play"></span></a></td>\
                        </tr>\
                        <tr>\
                            <td>З нею</td>\
                            <td>3:30</td>\
                            <td><a class="play-track" href="#play-track"><span class="glyphicon glyphicon-play"></span></a></td>\
                        </tr>\
                        <tr>\
                           <td>З нею</td>\
                            <td>3:30</td>\
                            <td><a class="play-track" href="#play-track"><span class="glyphicon glyphicon-play"></span></a></td>\
                        </tr>\
                        <tr>\
                            <td>З нею</td>\
                            <td>3:30</td>\
                            <td><a class="play-track" href="#play-track"><span class="glyphicon glyphicon-play"></span></a></td>\
                        </tr>\
                        <tr>\
                            <td>З нею</td>\
                            <td>3:30</td>\
                            <td><a class="play-track" href="#play-track"><span class="glyphicon glyphicon-play"></span></a></td>\
                        </tr>\
                        <tr>\
                            <td>З нею</td>\
                            <td>3:30</td>\
                            <td><a class="play-track" href="#play-track"><span class="glyphicon glyphicon-play"></span></a></td>\
                        </tr>\
                    </table>\
                    </div>\
                   <div class="comments">\
                    <h4>Comments&nbsp;<span class="count">'+randomcount+'</span></h4>\
                    <ul id="comments-list"> </ul>\
                    </div>\
                </div>\
            </div>'
    );







    $('#music-overview').append(music);
    $('#comments-list').append(commentshtml);



    $('.cycle-slideshow').cycle();
}


$(document).ready(function(){


    $.getJSON("http://cors.io/spreadsheets.google.com/feeds/list/0AirkLgmZ4th5dHlHeVJBZGlWQjBGTFprM0gzT1pKamc/od6/public/values?alt=json", builder);



});