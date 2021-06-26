import * as notice from "../module/alertModule";

function getSignTemplate(msg: string | undefined) {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>CNU Library</title>
            <link rel="stylesheet" href="/style/sign.css">
            <link rel="stylesheet" href="/style/font.css">
        </head>
        <body>
            <header>
                <div class="both-hand-side">
                    <div class="center" id="logo-box">
                        <a href="/index.html">
                            <h1 class="center" id="logo-text">
                                Chungnam<br>
                                National<br>
                                University<br>
                                Library
                            </h1>
                        </a>
                    </div>
                </div>
            </header>
            <main>
                <div class="both-hand-side">
                    <div class="center" id="sign-box">
                        <form action="/signin" method="POST">
                            <label class="input-box" id="signin-id-box">
                                ID<br>
                                <input type="text" class="hover-box" name="id">
                            </label>
                            <label class="input-box" id="signin-pw-box">
                                PW<br>
                                <input type="password" class="hover-box" name="pw">
                            </label>
                            <div class="submit-box" id="signin-submit-box">
                                <input type="submit" value="Sign In">
                            </div>
                            <div id="signup-link-box">
                                <a href="/page/signup.html">Sign Up</a>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
            <footer>copyright©saltwalks2021</div>
            ${notice.alert(msg)}
        </body>
        </html>
    `;
}

export default getSignTemplate;