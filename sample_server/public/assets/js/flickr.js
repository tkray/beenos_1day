// flickrのapiを使用した関数はこちら。
// 本当はモジュール化して使いたいが、今回はモジュール化はせずに実装する。
// そのため、読み込みの順番が重要になる。
// 必ずjQuery, resource.jsを先に読ませる事。
var Flickr = {};

(function() {
  "use strict";

  // ページャー生成用設定情報
  Flickr.pagerOptions = function(options) {
    var baseOptions = {
      per_page: 20,
      page: 1
    };

    return $.extend(baseOptions, options);
  };

  // 検索を行う
  Flickr.search = function(pagerOptions) {
    return function(criteria) {
      return Resource.json('get')(
        '/photos/search',
        $.extend(pagerOptions, criteria)
      );
    };
  };

  // 画像のURLを生成する
  Flickr.imageUrl = function(farm, server, id, secret) {
    return 'http://farm' + farm + '.staticflickr.com/' + server + '/' + id + '_' + secret + '.jpg';
  };
})();
