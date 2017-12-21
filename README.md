# TAMBOON-MOBILE

TamBoon is Thai word for making a merit. The app consists of two parts:

1. A server-side API.
2. An iOS or Android application

### SERVER-SIDE API

An example implementation in Go (with a pre-compiled OS X binary) is provided inside the
`tamboon-server` folder, alternatively you can [install Go](https://golang.org) and run
the files manually by using the following commands:

```sh
$ cd tamboon-server
$ export OMISE_SKEY=skey_your_omise_key
$ go run *.go
```

The server should have 2 endpoints:

1. `GET /` - This endpoint should return a JSON list of charities similar to the
   following:

   ```json
   [
     { "id": 0, "name": "Ban Khru Noi", "logo_url": "http://rkdretailiq.com/news/img-corporate-baankrunoi.jpg" },
     { "id": 1, "name": "Habitat for Humanity Thailand", "logo_url": "http://www.adamandlianne.com/uploads/2/2/1/6/2216267/3231127.gif" },
     { "id": 2, "name": "Paper Ranger", "logo_url": "https://myfreezer.files.wordpress.com/2007/06/paperranger.jpg" },
     { "id": 3, "name": "Makhampom", "logo_url": "http://www.makhampom.net/makhampom/ppcms/uploads/UserFiles/Image/Thai/T14Publice/2554/January/Newyear/logoweb.jpg" }
   ]
   ```

2. `POST /donate` - This endpoint should accepts a JSON payload similar to the following:

   ```json
   {
     "name":   "John Smith",
     "token":  "tokn_test_123",
     "amount": 10000
   }
   ```

   The server should then creates a charge using the supplied token against the Omise API.

**DOs**

* Use the Omise API in test mode.
* (Optional) Use one of the many Omise integration library.
* Use HTTP status codes to indicate success/failure.
* Write clean, readable and well-structured code.
* Version-control with Git and write good commit messages.
* (Bonus) Write concise and well-targeted tests.
* (Bonus) Follow good security principles.

**DONTs**

Since this is just a quick test, you do not need to spend time on:

* Database or any persistent storage. Charity list can be hard-coded.
* Authentication.
* HTTP Content-Type negotiation.
* Any form of caching.
* Deal with any foreign currency exchanges.

### MOBILE APPLICATION

The application should use the default platform style and should consists of two screens:

1. Charity list screen. - Load list of charities from the `/` server-side endpoint and
   display them using `ListView` (Android) or `UITableView` (iOS). Tapping a charity
   should bring up the next screen.

2. Charity donation screen. - Shows a credit card number entry form and a field to enter
   donation amount in THB. Submitting the form should displays a progress spinner and
   send data to the `/donate` endpoint in the background. After everything is complete,
   bring up the next screen.

3. Success screen. - Shows a simple dismiss button that goes back to the first screen.

**DOs**

* Handles HTTP status codes properly.
* (Optional) Use one of the Omise-provided Mobile SDKs.
* Write clean, readable and well-structured code.
* Follow good platform development guidelines where applicable.
* Version-control with Git and write good commit messages.
* (Bonus) Handles network failure gracefully.
* (Bonus) Follow good security principles.
* (Bonus) Follow good UI/UX principles.
* (Bonus) UI Tests.

**DONTs**

Since this is just a quick test, you do not need to spend time on:

* Database, persistent storage or any form of caching.
