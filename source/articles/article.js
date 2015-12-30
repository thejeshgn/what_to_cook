APP.article = (function () {
    'use strict';

    function deleteArticles(successCallback) {
        console.log("inside deleteArticles");
        APP.database.runQuery("DELETE FROM articles", [], successCallback);
    }

    function insertArticles(articles, successCallback) {
        console.log("inside insertArticles");
        console.log(articles);
        var remaining = articles.length, i, l, data = [];

        if (remaining === 0) {
            successCallback();
        }

        // Convert article array of objects to array of arrays
        for (i = 0, l = articles.length; i < l; i = i + 1) {
            console.log(i);
            data[i] = [articles[i].id, articles[i].name, articles[i].description, articles[i].ingredients, articles[i].steps,articles[i].credit];
            console.log(data[i])
            console.log("-------------------------------")
        }

        console.log("running insert");

        APP.database.runQuery("INSERT INTO articles (id, name, description, ingredients, steps, credit) VALUES (?, ?, ?, ?, ?, ?);", data, successCallback);
    }

    function selectBasicArticles(successCallback) {
        APP.database.runQuery("SELECT id, name, description, ingredients, steps, credit FROM articles", [], successCallback);
    }

    function selectFullArticle(id, successCallback) {
        console.log("get the article for id="+id);
        APP.database.runQuery("SELECT id, name, description, ingredients, steps, credit FROM articles WHERE id = ?", [id], successCallback);
    }

    return {
        insertArticles: insertArticles,
        selectBasicArticles: selectBasicArticles,
        selectFullArticle: selectFullArticle,
        deleteArticles: deleteArticles
    };
}());