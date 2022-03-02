<style amp-custom>
    amp-ad[type="eplanning"] {
        margin: 0 auto;
        display: block;
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    article {
        margin-top: 45px;
    }

    body {
        font-family: "Open Sans",-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;
        font-size: 1rem;
        margin: 0;
        padding: 0;
        width: auto;
        color: #171717;
    }

    header {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: start;
        background-color: white;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.6);
        height: 44px;
        position: fixed;
        transition: top 0.5s ease-in-out;
        top:0;
        width: 100%;
        z-index: 99999;
    }

    .hamburger_wrapper {
        float: left;
        background-color: transparent;
        width: 50px;
        height: 27px;
    }
    .hamburger_wrapper #hamburger {
        width: 26px;
        margin: auto;
        cursor: pointer;
        outline: none;
        padding-top: 5px
    }
    .hamburger_wrapper #hamburger span {
        display: block;
        width: 100%;
        height: 2px;
        background: #313131;
        margin: 6px 0 0 0;
    }
    .hamburger_wrapper #hamburger span:first-of-type {
        margin-top: 0;
    }


    footer {
        background-color: #171717;
        color: white;
        padding: 0;
        bottom: 0;
        width: 100%;
        text-align: center;
    }

    footer p {
        padding: 10px;
        font-size: 0.85em;
        margin: 0 0 5px 0;
        letter-spacing: 0.02em;
    }

    footer .logo {
        margin: 0;
        padding: 10px;
        background: #313131;
    }
    .container {
        padding: 15px;
    }

    .date {
        border-top: 1px solid #b1b0b0;
        color: gray;
        font-size: 14px;
        margin: 9px 0;
        padding: 5px 0;
        width: 100%;
    }


    figure {
        margin: 0;
        padding: 0;
        position: relative;
    }

    figure img {
        display: block;
    }

    figcaption {
        font-size: .85em;
        color: white;
        left: 0;
        bottom: 0;
        line-height: 15px;
        position: absolute;
        text-shadow: 1px 1px 3px black;
        text-transform: uppercase;
        width: 100%;
        white-space: normal;
        background-color: rgba(0,0,0,.4);
        padding: 8px;
    }

    .main-image {
        margin: 45px 0 0 0;
        padding: 0;
    }

    h1 {
        font-size: 2.1rem;
        font-weight: 700;
        line-height: 1.05em;
        margin: 0;
        padding: 10px 0;
        font-family: "Roboto Condensed",Helvetica,sans-serif;
        letter-spacing: -0.02em;
    }

    .hat {
        background-color: transparent;
        color: darkslategray;
        font-size: .95rem;
        font-weight: 700;
        text-transform: uppercase;
        padding: 2px 0;
        display: inline-block;
        font-family: 'Oswald', sans-serif;
    }

    .hat a {
        color: darkslategray;
        text-decoration: none;
    }

    .headline {
        font-size: 1.4rem;
        line-height: 1.2em;
        letter-spacing: -0.02em;
        font-family: "Roboto Condensed",Helvetica,sans-serif;
    }

    .body {
        text-align: left;
        line-height: 20px;
    }
    .body p {
        font-size: 1.2rem;
        line-height: 1.6em;
        letter-spacing: -0.02em;
        margin: 20px 0;
        overflow-wrap: break-word;
    }
    .body>p:first-of-type:first-letter {
        color: #dd0202;
        float: left;
        font-size: 4rem;
        font-weight: bold;
        line-height: .2;
        font-family: "Roboto Condensed",Helvetica,sans-serif;
        margin: 24px 10px 10px 0;
        transform: translateY(-10px);
    }
    .body a {
        color: #0655e4;
        text-decoration: none;
    }

    .body figcaption {
        padding: 0;
        font-weight: normal;
        font-size: .9rem;
    }
    .body figcaption h4 {
        padding: 5px;
        font-size: .85rem;
        font-weight: normal;
        letter-spacing: 0.03em;
    }

    .body h2 {
        font-size: 1.6rem;
        font-family: "Roboto Condensed", Helvetica, sans-serif;
        font-weight: 700;
        line-height: 1.2em;
        margin: 1em 0 0 0;
        letter-spacing: -0.02em;
    }

    .relacionadas {
        padding: 10px;
        background: #f4f4f4;
    }

    .relacionadas h4 {
            font-weight: bold;
            font-size: 1.1rem;
            text-transform: uppercase;
            color: #171717;
            margin: 5px 0;
            border-bottom: 2px solid #ccc;
            padding-bottom: 5px;
           letter-spacing: normal;
    }

    .relacionadas h3 {
        font-size: 1.1rem;
        font-weight: 700;
        line-height: 1.05em;
        margin: 0;
        padding: 10px 15px;
        letter-spacing: normal;
        font-family: "Roboto Condensed",Helvetica,Arial,sans-serif;
    }

    .relacionadas ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    .relacionadas ul li {
        background-color: white;
        box-shadow: 0px 3px 7px 0 rgba(0,0,0,0.2);
        margin-top: 20px;
    }

    .relacionadas ul li a {
        text-decoration: none;
        color: black;
    }

    .sidebar {
        margin: 45px 0 0 0;
        padding: 0;
        background: white;
        font-family: "Roboto Condensed",Helvetica,Arial,sans-serif;
    }

    .sidebar ul {
        padding: 0 10px;
        list-style: none;
        margin: 0;
        font-size: 1rem;
    }

    .sidebar ul li.link {
        padding: 10px 0;
        border-bottom: 1px solid lightgray;
    }

    .sidebar ul li.link-without-padding {
        font-weight: bold;
        padding: 15px 0 10px 0;
        border-bottom: 1px solid lightgray;
        text-transform: uppercase;
    }

    .sidebar a {
        text-transform: uppercase;
        font-family: "Roboto Condensed",Helvetica,sans-serif;
        color: #171717;
        text-decoration: none;
    }

    .social-share {
        text-align: center;
    }

    .social-share amp-social-share {
        margin: 10px 0 3px 0;
    }

    .tags { 
        margin: 20px 0;
        border-bottom: 1px solid #e1e1e1; 
        padding: 0 0 8px; 
    }
    .tags__titulo {
        border-bottom: 1px solid lightgray;
        letter-spacing: -0.02em;
        padding-bottom: 3px;
        margin-bottom:10px;
        font-family: "Roboto Condensed", Helvetica, Arial,sans-serif;
        font-size: 1.4rem;
        font-weight: bold;
    }
    .tags label {   
        background: transparent;
        padding: 5px 0;
        color: #171717;
        text-transform: uppercase;
        font-size: 1rem;
        font-family: "Roboto condensed",Helvetica,arial,sans-serif;
        font-weight: 700;
        margin: 0px 15px 15px 0;
    }
    .tags  ul { 
        padding: 0px; 
        margin: 3px 0; 
    }
    .tags li { 
        margin: 0 15px 15px 0;
        list-style: none;
        letter-spacing: normal;
        display: inline-block;
        padding: 4px 8px;
        font-size: 1rem;
        background: lightcyan;
        border: 1px solid lightgray;
        border-radius: 3px;
        font-family: "Roboto Condensed",Helvetica, Arial, sans-serif;
    }
   .tags li a { 
       text-decoration: none; 
       color: #171717;
    }
   .tags li a:hover {
       color:#dd0202; 
    }

    .icon-expand {
    right: 20px;
    position: absolute;
    top: 20px;
    z-index: 9999;
    color: white;
    padding: 2px;
    font-size: 20px;
    text-shadow: 1px 1px 3px black;
}

amp-social-share.twitter {
    background-color: transparent;
    background-image: url('/images/glyph/share/twitter.svg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 30px;
}

amp-social-share.facebook {
    background-color: transparent;
    background-image: url('/images/glyph/share/facebook.svg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 30px;
}

amp-social-share.whatsapp {
    background-color: transparent;
    background-image: url('/images/glyph/share/whatsapp.svg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 30px;
}

amp-social-share.linkedin {
    background-color: transparent;
    background-image: url('/images/glyph/share/linkedin.svg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 30px;
}

hr {
    border: 0;
    height: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
}

    /* MAS VISTAS*/
    .card-body { margin: 20px 0;
        padding: 10px 20px;     background: #eee;}

    .card-body .title {     font-weight: bold;
    text-transform: uppercase;
    letter-spacing: normal; }
    .card-body .title a { color:#000; text-decoration: none}
    .card-body ul {     margin: 10px 5px; padding: 0; }
    .card-body li { list-style: none }
    .card-body h5 {     padding: 10px 2px;
    margin: 0px 0px 20px;
    border-bottom: 1px solid #ccc;
    letter-spacing: normal; }
    .card-body li a { color:#000; text-decoration: none; }
    .card-body li a:hover { color:#f4f4f4; text-decoration: none; }
    .position {font-size: 2em;
    font-weight: 900;
    font-style: italic;
    position: absolute;
    background: #fff;
    left: 35px;
    padding: 1%;
    z-index: 999;}

    .btn-primary { background: #0076ba;
  background-image: -webkit-linear-gradient(top, #0076ba, #d9141d);
  background-image: -moz-linear-gradient(top, #0076ba, #d9141d);
  background-image: -ms-linear-gradient(top, #0076ba, #d9141d);
  background-image: -o-linear-gradient(top, #0076ba, #d9141d);
  background-image: linear-gradient(to bottom, #0076ba, #d9141d);
  -webkit-border-radius: 4;
  -moz-border-radius: 4;
  border-radius: 4px;
    text-transform: uppercase;
    font-weight: 600;
  color: #ffffff;
  font-size: 11px;
  padding: 10px 20px 10px 20px;
  text-decoration: none;}
  .btn-primary:hover {
  background: #f0222c;
  background-image: -webkit-linear-gradient(top, #f0222c, #f22933);
  background-image: -moz-linear-gradient(top, #f0222c, #f22933);
  background-image: -ms-linear-gradient(top, #f0222c, #f22933);
  background-image: -o-linear-gradient(top, #f0222c, #f22933);
  background-image: linear-gradient(to bottom, #f0222c, #f22933);
  text-decoration: none;
}
.button-wrap { width: 100%; text-align: center; margin:10px 0; }
.buscador {     margin: 0px 5px 5px 30px;
    padding: 5px; }

    .buscador button {
        border: none;
        height: 26px;
    }
    .buscador button i {
        color: #888888;
    }
    .buscador input {
        border: none;
    height: 26px;
    width: 150px;
    padding: 0px 5px;
    }

/*SOCIAL TOP SHARE*/
.social-topsharing {background: #f8f8f8;
    padding: 0.5em 0;
    border-radius: 8px;
    -moz-box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1);
    -webkit-box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1);
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1);

margin-bottom: 15px}

    .social-topsharing ul { margin: 0;     padding: 0 3%; }

   .social-topsharing li {     list-style: none;
    display: inline-block;
    margin: 0 1%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 50%;
    width: 20px;
    text-align: center;}
   .social-topsharing h4 {    display: inline-block;
    font-size: 11px;}
  .social-topsharing  a {color:#0076ba;}

   @media only screen and (min-device-width: 320px) and (max-device-width: 568px)
and (-webkit-device-pixel-ratio: 2) and (device-aspect-ratio: 40/71)
{
  .container { padding:5px; }
  p, h1, .tags { padding:10px 20px; }
  .hat { margin:5px 0px 0px 20px; font-size: 11px }
}

.list a {
    text-decoration: none;
}
.list a h2 {
    font-family: 'Roboto Condensed',Helvetica,Arial,sans-serif;
    color: #171717;
    text-decoration: none;
    letter-spacing: 0;
    margin: 0 10px 20px 10px;
    line-height: 1.1em;
}
.list p.pf-hat {
    display: inline-block;
    color: #990033;
    padding: 0;
    margin: 0 10px 3px 10px;
    border-bottom: 2px solid #ccc;
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
    line-height: 1em;
}
</style>
