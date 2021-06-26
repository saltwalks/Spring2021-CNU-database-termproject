import * as d from '../module/dateModule';
import * as notice from '../module/alertModule';

function getPinfoTemplate(id: string, name: string, today: Date, msg: string | undefined) {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="/style/search.css">
            <link rel="stylesheet" href="/style/font.css">
            <title>CNU Library</title>
        </head>
        <body>
            <header>
                <span class="center" id="logo-box">
                    <a href="/page/search.html">
                        <h1>Chungnam Nat'l University Library</h1>
                    </a>
                </span>
            </header>
            <nav>
                <span class="center" id="date-box">
                    DAEJEON, ${d.week(today)}, ${d.month(today)} ${today.getDate()}, ${today.getFullYear()}
                </span>
                <span class="center" id="page-change-box">
                    <a class="ahover" href="/page/search.html">Search Books</a>
                </span>
            </nav>
            <main>
                <div class="main-container" id="mypage-container">
                    <h1 id="container-title-box">SIGN IN AS : ${id} - ${name}</h1>
                    <aside id="menu-box">
                        <a class="ahover selected" id="info-box" href="/page/pinfo.html">Personal Information</a>
                        <a class="ahover" id="rent-box" href="/page/rent.html">Rented Books</a>
                        <a class="ahover" id="reserve-box" href="/page/reserve.html">Reserved Books</a>
                    </aside>
                    <article id="article-box">
                        <h2 id="article-title-box">Personal Information</h2>
                        <div id="article-content-box">
                            <div>ID : ${id}</div>
                            <div>Name : ${name}</div>
                            <form action="/pinfo" method="POST">
                                <label>
                                    Password : 
                                    <input class="no-appearance ihover info-input" type="password" name="pw">
                                </label>
                                <br>
                                <label>
                                    Email : 
                                    <input class="no-appearance ihover info-input" type="text" name="email">
                                </label>
                                <br><br>
                                <input class="small-button" id="content-submit" type="submit" value="Modify Information">
                            </form>
                        </div>
                    </article>
                </div>
            </main>
            <footer>copyright©saltwalks2021</footer>
            ${notice.alert(msg)}
        </body>
        </html>
    `;
}

export default getPinfoTemplate;