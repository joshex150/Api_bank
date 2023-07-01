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
        const sender = '"Huddle👺" <joshex150@gmail.com>';
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
        <body class=t0 style="min-width:100%;Margin:0px;padding:0px;background-color:#EDEDED;"><div class=t1 style="background-color:#EDEDED;"><table role=presentation width=100% cellpadding=0 cellspacing=0 border=0 align=center><tr><td class=t121 style="font-size:0;line-height:0;mso-line-height-rule:exactly;" valign=top align=center>
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
        <div style="font-size:0px;"><img class=t30 style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width=40 height=39.34375 src="/images/huddle.png" /></div></td>
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
