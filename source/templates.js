APP.templates = (function () {
    'use strict';

    function application() {
        return '<div id="window"><div id="header"><h1>What\'s for dinner?</h1></div><div id="body"></div></div>';
    }

    function home() {
        return '<div id="headlines"></div></div><a href="#" id="refreshButton">⇓</a>';

    }

    function articleList(articles) {
        var i, l, output = '';

        if (!articles.length) {
            return '<p><i>Start by downloading recipies ⇓ </i></p>';
        }
        l = articles.length

        i = Math.floor(Math.random() * l);  
        console.log(" logged i="+i);
        output = '<a href="#' + articles[i].id + '"><b>' + articles[i].name + '</b></a>';        
        output = '<h2>' + output + '</h2>';
        output = output + ' <button id="randomButton" onclick="APP.articlesController.showArticleList()">No!</button>'
        return  output;        
    }

    function article(articles) {

        // If the data is not in the right form, redirect to an error
        if (!articles[0]) {
            window.location = '#error';
        }
        return '<a href="#">Go back home</a><h2>' + articles[0].name + '</h2><h3> Ingredients </h3>' + articles[0].ingredients + ' <h3>Steps</h3> ' + articles[0].steps;
    }

    function articleLoading() {
        return '<a href="#">Go back home</a><br /><br />Please wait&hellip;';
    }

    return {
        application: application,
        home: home,
        articleList: articleList,
        article: article,
        articleLoading: articleLoading
    };
}());