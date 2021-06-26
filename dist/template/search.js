"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeSearchTemplate = void 0;
function makeSearchTemplate(resultRows) {
    var buffer = "";
    for (var _i = 0, resultRows_1 = resultRows; _i < resultRows_1.length; _i++) {
        var oneRow = resultRows_1[_i];
        if (oneRow instanceof Array) {
            buffer += "<tr><td>" + oneRow[0] + "</td><td>" + oneRow[1] + "</td><td>" + oneRow[2] + "</td><td>2020</td><td>\uC791\uAC00</td><td><form action=\"\"><input type=\"hidden\"><input class=\"small-button\" type=\"submit\" value=\"\uB300\uC5EC\"><input class=\"small-button\" type=\"submit\" value=\"\uC608\uC57D\"></form></td></tr>";
        }
    }
    return "\n        <!DOCTYPE html>\n        <html lang=\"en\">\n        <head>\n            <meta charset=\"UTF-8\">\n            <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n            <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n            <link rel=\"stylesheet\" href=\"/style/search.css\">\n            <link rel=\"stylesheet\" href=\"/style/font.css\">\n            <title>CNU Library</title>\n        </head>\n        <body>\n            <header>\n                <span class=\"center\" id=\"logo-box\">\n                    <a href=\"/page/search.html\">\n                        <h1>Chungnam Nat'l University Library</h1>\n                    </a>\n                </span>\n            </header>\n            <nav>\n                <span class=\"center\" id=\"date-box\">\n                    NEW YORK, SUNDAY, MAY 20, 2020\n                </span>\n                <span class=\"center\" id=\"page-change-box\">\n                    <a class=\"ahover\" href=\"/page/pinfo.html\">My Page</a>\n                </span>\n            </nav>\n            <main>\n                <div class=\"main-container\" id=\"search-container\">\n                    <form action=\"/searchbook\" id=\"search-box\" method=\"GET\">\n                        <div class=\"query-box\" id=\"select-box\">\n                            <select class=\"no-appearance\" name=\"type\" id=\"\">\n                                <option value=\"title\">TITLE</option>\n                                <option value=\"publisher\">PUBLISHER</option>\n                                <option value=\"year\">YEAR</option>\n                                <option value=\"author\">AUTHOR</option>\n                                <option value=\"query\">QUERY</option>\n                            </select>\n                        </div>\n                        <div class=\"query-box\" id=\"word-box\">\n                            <input class=\"no-appearance\" type=\"text\" name=\"keyword\" value=\"\">\n                        </div>\n                        <div class=\"query-box\" id=\"submit-box\">\n                            <input class=\"no-appearance\" type=\"submit\" value=\"SEARCH\">\n                        </div>\n                    </form>\n                    <table id=\"result-box\">\n                        <thead>\n                            <th>ISBN</th>\n                            <th>TITLE</th>\n                            <th>PUBLISHER</th>\n                            <th>YEAR</th>\n                            <th>AUTHOR</th>\n                            <th>RENT & RESERVE</th>\n                        </thead>\n                        <tbody>\n                            " + buffer + "\n                        </tbody>\n                    </table>\n                </div>\n            </main>\n            <footer>copyright\u00A9saltwalks2021</footer>\n        </body>\n        </html>\n    ";
}
exports.makeSearchTemplate = makeSearchTemplate;
