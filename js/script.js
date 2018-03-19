function search() {
    var tracklist = $('.tracklist');

    $("button").click(function () {
        var query = $.trim($(this).parent().find('#search').val());

        $.getJSON("https://itunes.apple.com/search?term="+encodeURI(query), function (data) {
            console.log(data); // Todo remove this after testing

            if (!$.isEmptyObject(data) && data.resultCount) {
                tracklist.html('<li>\n' +
                    '        <div class="first-track-info">\n' +
                    '            <div class="empty-cell"></div>\n' +
                    '            <div class="artist-cell">Artist</div>\n' +
                    '            <div class="track-cell">Track</div>\n' +
                    '            <div class="collection-cell">Collection</div>\n' +
                    '            <div class="genre-cell">Genre</div>\n' +
                    '            <div class="empty-cell-1"></div>\n' +
                    '        </div>\n' +
                    '    </li>');

                $.each(data.results, function (key, row) {
                    tracklist.append('<li>\n' +
                        '        <div class="second-info '+(key % 2 == 0 ? 'even' : 'odd')+'">\n' +
                        '            <div class="img-album"><img src="'+row.artworkUrl100+'"></div>\n' +
                        '            <div class="artist-track">'+row.artistName+'</div>\n' +
                        '            <div class="track-name">'+row.trackName+'</div>\n' +
                        '            <div class="collection-name">'+row.collectionName+'</div>\n' +
                        '            <div class="genre-track">'+row.primaryGenreName+'</div>\n' +
                        '            <div></div>\n' +
                        '        </div>\n' +
                        '        <div class="additional-data">\n' +
                        '            <div class="empty-cell-info"></div>\n' +
                        '            <div class="name-track"><span class="name-song"><br>The Beatles - Here Comes the Sun</span> <i class="fa fa-music"></i><br><br>\n' +
                        '                <b>Collection:</b> Abbey Road<br> <b>Track Count:</b> 17<br> <b>Price:</b> 12.99 USD</div>\n' +
                        '            <div class="duration-and-price-track"><b>Track duration:</b> 3.06 min<br> <b>Track Price:</b> 1.29 USD </div>\n' +
                        '            <div class="genre-track-info"></div>\n' +
                        '            <div class="track-plus-detail"></div>\n' +
                        '        </div>\n' +
                        '    </li>');
                });
            }
        })
    });
}
search();


$(document).ready(function() {

    $('.second-info.even').click(function () {
        $(this).toggleClass('active').next().slideToggle();
        $('.second-info.even').not(this).removeClass('active').next().slideUp();
    });

});