const userCollection = require("../models/userModel");
const CryptoJS = require("crypto-js");
const sendEmail = require("../controllers/mailController");

module.exports = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const user = await userCollection.findOne({ email });

    if (user) {
      // Check if password matches
      const result = user.password === password;

      if (result) {
        // Encrypt
        const data = { user };
        const ciphertext = CryptoJS.AES.encrypt(
          JSON.stringify(data),
          "07052580111"
        ).toString();
        const sender = '"Huddle👺" <huddle-notify@outlook.com>';
        const recipient = email;
        const subject = "Successful Login";
        const text = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">
        <head>
        <meta name=x-apple-disable-message-reformatting>
        <meta http-equiv=X-UA-Compatible>
        <meta charset=utf-8>
        <meta name=viewport content=target-densitydpi=device-dpi>
        <meta content=true name=HandheldFriendly>
        <meta content=width=device-width name=viewport>
        <style type="text/css">
        body {
          background: white !important;
        }
        table {
        border-collapse: separate;
        table-layout: fixed;
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
        background: white;
        }
        table td {
        border-collapse: collapse
        }
        .ExternalClass {
        width: 100%
        }
        .ExternalClass,
        .ExternalClass p,
        .ExternalClass span,
        .ExternalClass font,
        .ExternalClass td,
        .ExternalClass div {
        line-height: 100%
        }
        * {
        line-height: inherit;
        text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
        -moz-text-size-adjust: 100%;
        -o-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale
        }
        html {
        -webkit-text-size-adjust: none !important
        }
        img+div {
        display: none;
        display: none !important
        }
        img {
        Margin: 0;
        padding: 0;
        -ms-interpolation-mode: bicubic
        }
        h1, h2, h3, p, a {
        line-height: 1;
        overflow-wrap: normal;
        white-space: normal;
        word-break: break-word
        }
        a {
        text-decoration: none
        }
        h1, h2, h3, p {
        min-width: 100%!important;
        width: 100%!important;
        max-width: 100%!important;
        display: inline-block!important;
        border: 0;
        padding: 0;
        margin: 0
        }
        a[x-apple-data-detectors] {
        color: inherit !important;
        text-decoration: none !important;
        font-size: inherit !important;
        font-family: inherit !important;
        font-weight: inherit !important;
        line-height: inherit !important
        }
        a[href^="mailto"],
        a[href^="tel"],
        a[href^="sms"] {
        color: inherit;
        text-decoration: none
        }
        @media (min-width: 481px) {
        .hd { display: none!important }
        }
        @media (max-width: 480px) {
        .hm { display: none!important }
        }
        [style*="Fira Sans"] {font-family: 'Fira Sans', BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif !important;} [style*="Montserrat"] {font-family: 'Montserrat', BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif !important;}
        @media only screen and (min-width: 481px) {.t11,.t9{padding-bottom:100px!important}.t22{mso-line-height-alt:90px!important;line-height:90px!important}.t32{mso-line-height-alt:40px!important;line-height:40px!important}.t34,.t39{padding-bottom:40px!important}.t40{line-height:52px!important;font-size:48px!important;mso-text-raise:1px!important}.t42{mso-line-height-alt:28px!important;line-height:28px!important}.t50{line-height:28px!important;font-size:18px!important}.t52{mso-line-height-alt:50px!important;line-height:50px!important}.t60{line-height:28px!important;font-size:18px!important}.t64,.t69{line-height:48px!important;mso-text-raise:11px!important}.t70{line-height:48px!important;font-size:13px!important;mso-text-raise:11px!important}.t72{line-height:48px!important;mso-text-raise:11px!important}.t79,.t81{padding-top:80px!important;padding-bottom:80px!important}.t92{mso-line-height-alt:40px!important;line-height:40px!important}.t94,.t99{padding-bottom:60px!important}}
        </style>
        <!--[if !mso]><!-->
        <link href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400;600;700&family=Montserrat:wght@800&display=swap" rel="stylesheet" type="text/css">
        <!--<![endif]-->
        <!--[if mso]>
        <style type="text/css">
        td.t11,td.t9{padding-bottom:100px !important}div.t22{mso-line-height-alt:90px !important;line-height:90px !important}div.t32{mso-line-height-alt:40px !important;line-height:40px !important}td.t34,td.t39{padding-bottom:40px !important}h1.t40{line-height:52px !important;font-size:48px !important;mso-text-raise:1px !important}div.t42{mso-line-height-alt:28px !important;line-height:28px !important}p.t50{line-height:28px !important;font-size:18px !important}div.t52{mso-line-height-alt:50px !important;line-height:50px !important}p.t60{line-height:28px !important;font-size:18px !important}td.t64,td.t69{line-height:48px !important;mso-text-raise:11px !important}a.t70{line-height:48px !important;font-size:13px !important;mso-text-raise:11px !important}td.t72{line-height:48px !important;mso-text-raise:11px !important}td.t79,td.t81{padding-top:80px !important;padding-bottom:80px !important}div.t92{mso-line-height-alt:40px !important;line-height:40px !important}td.t94,td.t99{padding-bottom:60px !important}
        </style>
        <![endif]-->
        <!--[if mso]>
        <xml>
        <o:OfficeDocumentSettings>
        <o:AllowPNG/>
        <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
        </xml>
        <![endif]-->
        </head>
        <body class=t0 style="min-width:100%;Margin:0px;padding:0px;background-color:white;"><div class=t1 style="background-color:#EDEDED;"><table role=presentation width=100% cellpadding=0 cellspacing=0 border=0 align=center><tr><td class=t121 style="font-size:0;line-height:0;mso-line-height-rule:exactly;" valign=top align=center>
        <!--[if mso]>
        <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false">
        <v:fill color=#EDEDED />
        </v:background>
        <![endif]-->
        <table role=presentation width=100% cellpadding=0 cellspacing=0 border=0 align=center><tr><td>
        <table class=t10 role=presentation cellpadding=0 cellspacing=0 align=center><tr>
        <!--[if !mso]><!--><td class=t11 style="background-color:#FFFFFF;overflow:hidden;width:620px;padding:60px 30px 70px 30px;">
        <!--<![endif]-->
        <!--[if mso]><td class=t11 style="background-color:#FFFFFF;overflow:hidden;width:680px;padding:60px 30px 70px 30px;"><![endif]-->
        <table role=presentation width=100% cellpadding=0 cellspacing=0><tr><td>
        <table class=t19 role=presentation cellpadding=0 cellspacing=0 align=center><tr>
        <!--[if !mso]><!--><td class=t20 style="overflow:hidden;width:475px;">
        <!--<![endif]-->
        <!--[if mso]><td class=t20 style="overflow:hidden;width:475px;"><![endif]-->
        <table role=presentation width=100% cellpadding=0 cellspacing=0><tr><td>
        <table class=t23 role=presentation cellpadding=0 cellspacing=0 align=left><tr>
        <!--[if !mso]><!--><td class=t24 style="width:40px;">
        <!--<![endif]-->
        <!--[if mso]><td class=t24 style="width:40px;"><![endif]-->
        <div style="font-size:0px;"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
        aria-hidden="true" role="img" class="iconify iconify--logos" width="51" height="65"
        preserveAspectRatio="xMidYMid meet" viewBox="0 10 45 20">
        <g fillRule="nonzero" fill="none">
          <path
            d="M27.967.879C20.242.875 12.182 2.615 4.047 4.872c-1.033.208-2.041.884-2.574 1.72C.983 7.38.805 8.171.652 9c-.79 4.428-.694 8.776-.53 13.594.036 1.103.2 2.41.715 3.205.538.803 1.46 1.313 2.561 1.48a95.99 95.99 0 0 0 4.232.525l-.312 8.698c-.048.692.29 1.267.71 1.598.376.286.795.413 1.225.445.86.065 1.869-.303 2.37-1.257 2.195-4.224 3.572-6.089 6.317-8.895 7.158.176 13.407-.222 20.482-.745 2.501-.065 4.218-2.11 4.672-3.743 1.357-4.232 1.568-9.456 1.712-14.737.061-2.093-.665-4.148-1.95-5.234-1.222-.991-2.702-1.35-4.058-1.718C35.031 1.363 31.263.905 27.967.879zm10.29 3.31c1.358.369 2.555.724 3.31 1.337 1.26 1.339 1.218 2.23 1.2 3.675-.142 5.122-.388 10.093-1.544 13.86-.498 1.405-1.366 2.405-3.006 2.556-7.208.533-13.462.945-20.707.739a1.032 1.032 0 0 0-.763.302c-3.044 3.074-4.601 5.21-6.921 9.676-.054.102-.171.164-.315.175-.097-.005-.136-.08-.142-.148l.314-9.432c.019-.509-.401-.995-.907-1.05a95.48 95.48 0 0 1-5.06-.62c-.726-.111-.994-.31-1.193-.606-.346-.825-.338-1.335-.365-2.128-.162-4.775-.242-8.948.491-13.1.068-.614.298-1.242.542-1.767.404-.632 1.023-.725 1.644-.897 7.956-2.197 15.74-3.84 23.068-3.845 3.592.13 7.364.49 10.354 1.273zm-27.479 8.09c-1.096 1.313-.987 3.096-.14 4.29.442.625 1.132 1.128 1.972 1.242 1.091.09 1.783-.352 2.53-.86 1.353-1.176 1.49-3.228.461-4.71-.524-.755-1.362-1.208-2.218-1.24-1.172.012-1.968.535-2.605 1.277zm11.856-1.072c-1.092.035-1.975.791-2.514 1.607-.617.933-.977 2.101-.478 3.246.96 2.203 4.277 2.176 5.6-.063.61-1.032.454-2.205 0-3.056-.452-.85-1.136-1.543-2.131-1.702a2.494 2.494 0 0 0-.477-.032zm9.625.207c-.34-.008-.69.024-1.018.111-1.312.35-2.429 1.704-2.26 3.437.086.872.487 1.722 1.21 2.308.723.585 1.773.847 2.88.62 1.272-.26 2.06-1.285 2.323-2.275.263-.99.197-1.999-.414-2.817a3.47 3.47 0 0 0-2.72-1.384zm-18.965 1.623c.245.002.438.08.637.366.445.642.321 1.615-.128 2.005-.447.39-.726.424-.922.398-.196-.027-.395-.162-.573-.414-.34-.48-.44-1.256.007-1.81.238-.316.675-.513.98-.545zm9.483.223c.038.006.464.253.668.636.204.383.242.739.048 1.066-.577.976-1.804.712-1.99.287-.07-.162-.017-.813.32-1.32.335-.509.757-.7.954-.67zm10.564.748c.062.083.213.64.096 1.082-.118.442-.31.715-.78.811-.602.124-.94 0-1.193-.207-.254-.205-.425-.552-.462-.923-.09-.92.24-1.133.764-1.273.61-.15 1.3.112 1.575.51z"
            fill="rgb(64, 25, 109)" />
      
        </g>
      </svg></div></td>
        </tr></table>
        </td></tr><tr><td><div class=t22 style="mso-line-height-rule:exactly;mso-line-height-alt:50px;line-height:50px;font-size:1px;display:block;">&nbsp;</div></td></tr><tr><td>
        <table class=t33 role=presentation cellpadding=0 cellspacing=0 align=center><tr>
        <!--[if !mso]><!--><td class=t34 style="border-bottom:1px solid #E1E2E6;overflow:hidden;width:475px;padding:0 0 30px 0;">
        <!--<![endif]-->
        <!--[if mso]><td class=t34 style="border-bottom:1px solid #E1E2E6;overflow:hidden;width:475px;padding:0 0 30px 0;"><![endif]-->
        <h1 class=t40 style="font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Fira Sans';line-height:38px;font-weight:700;font-style:normal;font-size:28px;text-decoration:none;text-transform:none;direction:ltr;color:#000000;text-align:left;mso-line-height-rule:exactly;mso-text-raise:3px;">Login Alert</h1></td>
        </tr></table>
        </td></tr><tr><td><div class=t32 style="mso-line-height-rule:exactly;mso-line-height-alt:30px;line-height:30px;font-size:1px;display:block;">&nbsp;</div></td></tr><tr><td>
        <table class=t43 role=presentation cellpadding=0 cellspacing=0 align=center><tr>
        <!--[if !mso]><!--><td class=t44 style="width:475px;">
        <!--<![endif]-->
        <!--[if mso]><td class=t44 style="width:475px;"><![endif]-->
        <p class=t50 style="font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Fira Sans';line-height:26px;font-weight:400;font-style:normal;font-size:16px;text-decoration:none;text-transform:none;direction:ltr;color:#9095A2;text-align:left;mso-line-height-rule:exactly;mso-text-raise:3px;">Dear ${user.firstname}, You&#39;re receiving this e-mail because you just logged into your account.</p></td>
        </tr></table>
        </td></tr><tr><td><div class=t42 style="mso-line-height-rule:exactly;mso-line-height-alt:18px;line-height:18px;font-size:1px;display:block;">&nbsp;</div></td></tr><tr><td>
        <table class=t53 role=presentation cellpadding=0 cellspacing=0 align=center><tr>
        <!--[if !mso]><!--><td class=t54 style="width:475px;">
        <!--<![endif]-->
        <!--[if mso]><td class=t54 style="width:475px;"><![endif]-->
        <p class=t60 style="font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Fira Sans';line-height:26px;font-weight:400;font-style:normal;font-size:16px;text-decoration:none;text-transform:none;direction:ltr;color:#9095A2;text-align:left;mso-line-height-rule:exactly;mso-text-raise:3px;">If this wasn't you please tap the button below to choose a new password.</p></td>
        </tr></table>
        </td></tr><tr><td><div class=t52 style="mso-line-height-rule:exactly;mso-line-height-alt:30px;line-height:30px;font-size:1px;display:block;">&nbsp;</div></td></tr><tr><td>
        <table class=t63 role=presentation cellpadding=0 cellspacing=0 align=left><tr>
        <!--[if !mso]><!--><td class=t64 style="background-color:#34D399;overflow:hidden;width:246px;text-align:center;line-height:46px;mso-line-height-rule:exactly;mso-text-raise:10px;border-radius:40px 40px 40px 40px;">
        <!--<![endif]-->
        <!--[if mso]><td class=t64 style="background-color:#34D399;overflow:hidden;width:246px;text-align:center;line-height:46px;mso-line-height-rule:exactly;mso-text-raise:10px;border-radius:40px 40px 40px 40px;"><![endif]-->
        <a class=t70 href=https://tabular.email style="display:block;font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Montserrat';line-height:46px;font-weight:800;font-style:normal;font-size:12px;text-decoration:none;text-transform:uppercase;letter-spacing:0.5px;direction:ltr;color:#FFFFFF;text-align:center;mso-line-height-rule:exactly;mso-text-raise:10px;" target=_blank>Reset your password</a></td>
        </tr></table>
        </td></tr></table></td>
        </tr></table>
        </td></tr></table></td>
        </tr></table>
        </td></tr><tr><td>
        <table class=t80 role=presentation cellpadding=0 cellspacing=0 align=center><tr>
        <!--[if !mso]><!--><td class=t81 style="background-color:#000000;overflow:hidden;width:620px;padding:60px 30px 60px 30px;">
        <!--<![endif]-->
        <!--[if mso]><td class=t81 style="background-color:#000000;overflow:hidden;width:680px;padding:60px 30px 60px 30px;"><![endif]-->
        <table role=presentation width=100% cellpadding=0 cellspacing=0><tr><td>
        <table class=t89 role=presentation cellpadding=0 cellspacing=0 align=center><tr>
        <!--[if !mso]><!--><td class=t90 style="overflow:hidden;width:475px;">
        <!--<![endif]-->
        <!--[if mso]><td class=t90 style="overflow:hidden;width:475px;"><![endif]-->
        <table role=presentation width=100% cellpadding=0 cellspacing=0><tr><td>
        <table class=t93 role=presentation cellpadding=0 cellspacing=0 align=center><tr>
        <!--[if !mso]><!--><td class=t94 style="border-bottom:1px solid #262626;width:600px;padding:0 0 40px 0;">
        <!--<![endif]-->
        <!--[if mso]><td class=t94 style="border-bottom:1px solid #262626;width:600px;padding:0 0 40px 0;"><![endif]-->
        <h1 class=t100 style="font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Fira Sans';line-height:32px;font-weight:600;font-style:normal;font-size:32px;text-decoration:none;text-transform:none;direction:ltr;color:#FFFFFF;text-align:left;mso-line-height-rule:exactly;">Huddle</h1></td>
        </tr></table>
        </td></tr><tr><td><div class=t92 style="mso-line-height-rule:exactly;mso-line-height-alt:30px;line-height:30px;font-size:1px;display:block;">&nbsp;</div></td></tr><tr><td>
        <table class=t103 role=presentation cellpadding=0 cellspacing=0 align=center><tr>
        <!--[if !mso]><!--><td class=t104 style="width:600px;">
        <!--<![endif]-->
        <!--[if mso]><td class=t104 style="width:600px;"><![endif]-->
        <p class=t110 style="font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Fira Sans';line-height:22px;font-weight:400;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;direction:ltr;color:#9095A2;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">If you do not want to change your password, you can ignore and delete this email.</p></td>
        </tr></table>
        </td></tr><tr><td><div class=t102 style="mso-line-height-rule:exactly;mso-line-height-alt:20px;line-height:20px;font-size:1px;display:block;">&nbsp;</div></td></tr><tr><td>
        <table class=t113 role=presentation cellpadding=0 cellspacing=0 align=center><tr>
        <!--[if !mso]><!--><td class=t114 style="width:600px;">
        <!--<![endif]-->
        <!--[if mso]><td class=t114 style="width:600px;"><![endif]-->
        <p class=t120 style="font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Fira Sans';line-height:22px;font-weight:400;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;direction:ltr;color:#9095A2;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">Huddle All rights reserved</p></td>
        </tr></table>
        </td></tr></table></td>
        </tr></table>
        </td></tr></table></td>
        </tr></table>
        </td></tr></table></td></tr></table></div></body>
        </html>`;
        await sendEmail(sender, recipient, subject, text);
        res.send(ciphertext);
      } else {
        res.status(400).send("Password or user mismatch");
      }
    } else {
      res.status(400).send("Password or user mismatch");
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Internal server error");
  }
};
