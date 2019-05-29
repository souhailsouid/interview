# Payment

[Stripe](https://stripe.com/docs/api?lang=node)

## En premier choix

https://stripe.com/docs/recipes/elements-react


## En deuxième choix
https://stripe.com/payments/checkout

# CORS


[CORS](https://www.npmjs.com/package/cors)


```
  app.use(cors())
```

# Cartes

* https://leafletjs.com/
* https://react-leaflet.js.org/

-> Tu peux le faire fonctionner avec [OpenStreetMap](https://wiki.openstreetmap.org/wiki/API)


# Emailing

* https://mailchimp.com/en/
  * Par API : https://developer.mailchimp.com/documentation/mailchimp/guides/manage-subscribers-with-the-mailchimp-api/
  * Par HTML : https://mailchimp.com/en/help/add-a-pop-up-signup-form-to-your-website/
* https://sendgrid.com/
* https://fr.mailjet.com/


# Roles 


## Table user

| name   | firstName | login  | password | role  |
|--------|-----------|--------|----------|-------|
| Ducerf | Alexis    | alexis | toto     | admin |
| Morane | Bob       | bob    | toto     | basic |

// 	isAdmin: { type: Boolean, default: false },
# Scripts Externes

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="theme-color" content="#000000">
    <!--
      manifest.json provides metadata used when your web app is added to the
      homescreen on Android. See https://developers.google.com/web/fundamentals/engage-and-retain/web-app-manifest/
    -->
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json">
    <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico">
    <link rel="apple-touch-icon" sizes="76x76" href="%PUBLIC_URL%/apple-icon.png">
    <!--     Fonts and icons     -->
    <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons" />
    <link href="https://use.fontawesome.com/releases/v5.0.10/css/all.css" rel="stylesheet">
    <!--
      Notice the use of %PUBLIC_URL% in the tags above.
      It will be replaced with the URL of the `public` folder during the build.
      Only files inside the `public` folder can be referenced from the HTML.

      Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
      work correctly both with client-side routing and a non-root public URL.
      Learn how to configure a non-root public URL by running `npm run build`.
    -->
    <title>Corpalif</title>
  </head>
  <body>
    <noscript>
      You need to enable JavaScript to run this app.
    </noscript>
    <div id="root"></div>
    <!--
      This HTML file is a template.
      If you open it directly in the browser, you will see an empty page.

      You can add webfonts, meta tags, or analytics to this file.
      The build step will place the bundled scripts into the <body> tag.

      To begin the development, run `npm start` or `yarn start`.
      To create a production bundle, use `npm run build` or `yarn build`.
    -->

    <!--  AJOUTER DES SCRIPTS EXTERNES -->

  </body>
</html>

```