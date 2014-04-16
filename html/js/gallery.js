/**
 * Created by howtwizer on 23.12.13.
 */


var hash = window.location.hash;
var id = hash.replace("#","");

var idArray = id.split('-');
//console.log();
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


    var pictures = [];



    pictures.push(
        '<div class="col-xs-12 col-sm-6 col-md-4">\
            <div class="gallery-item">\
                <div class="item-header">\
                        <span class="item-author" style="background: url(images/hromadske-icon.png) left no-repeat;">'+randomauthor+'</span><span class="item-social"><span class="icon icon-like"></span>'+(Math.floor(Math.random()*10))+'   <span class="icon icon-comments"></span>'+randomcount+'</span>\
                    </div>\
                <div class="item-body">\
                      <div class="cycle-slideshow"  data-cycle-timeout="0"  data-cycle-swipe="true" startingSlide="2" data-cycle-caption=".caption" data-cycle-caption-template="{{slideNum}} of 8"  >\
                        <img class="gallery-img" src="items/images/demo1.jpg" alt=""/>\
                        <img class="gallery-img" src="items/images/demo2.jpeg" alt=""/>\
                        <img class="gallery-img" src="items/images/demo3.png" alt=""/>\
                        <img class="gallery-img" src="items/images/demo4.jpg" alt=""/>\
                        <img class="gallery-img" src="items/images/demo5.jpg" alt=""/>\
                        <img class="gallery-img" src="items/images/demo6.jpg" alt=""/>\
                        <img class="gallery-img" src="items/images/demo7.jpg" alt=""/>\
                        <img class="gallery-img" src="items/images/demo8.jpeg" alt=""/>\
                    </div>\
                    <div class="caption"></div>\
                    <a class="back" href="picture-item.html#'+id[0]+'">< Album</a>\
                </div>\
                   <div class="comments">\
                    <h4>Comments&nbsp;<span class="count">'+randomcount+'</span></h4>\
                    <ul id="comments-list"> </ul>\
                    </div>\
                </div>\
            </div>'
    );







    $('#gallery-overview').append(pictures);
    $('#comments-list').append(commentshtml);



    $('.cycle-slideshow').cycle({
        startingSlide: idArray[1]-1
    });
}


$(document).ready(function(){


    $.getJSON("http://cors.io/spreadsheets.google.com/feeds/list/0AirkLgmZ4th5dHlHeVJBZGlWQjBGTFprM0gzT1pKamc/od6/public/values?alt=json", builder);



});