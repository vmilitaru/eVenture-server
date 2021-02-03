# eVenture Application

![eVenture-home](https://user-images.githubusercontent.com/70764326/106621966-01bcf980-656b-11eb-9f22-60b142d05f1c.png)![eVenture-home](https://user-images.githubusercontent.com/70764326/106622115-2b762080-656b-11eb-9671-ce64e2262d87.png)

A [School of Code](https://www.schoolofcode.co.uk/) event management and ticketing application for organising and delivering the community classes, another [School of Code](https://www.schoolofcode.co.uk/) initiative to introduce people from diverse backgrounds to the world of tech. Working in a team of five people, we took on the challenge and we identified the pain points of participants and organisers for this problem. And the solution that we came up with was a web app that allows the bootcampers/organisers to create and manage the events and forthcoming participants to sign up to an upcoming event.

-   Participants can login and sign up for an event.They also have the posibility to see the list of their upcoming events in **My Events** page, where they can also cancel their registration to a particular event .

![eVenture-myEvents](https://user-images.githubusercontent.com/70764326/106624836-fae3b600-656d-11eb-8cfd-d9ee81513f68.png)

-   Organisers can create and edit events, a functionality to which only the organisers have access based on the access permisions associated to their account in the Auth0 dashboard.
<table>
  <tr>
   <td align="center"><a href="https://github.com/Teeenbe"><img src="https://user-images.githubusercontent.com/70764326/106625765-e48a2a00-656e-11eb-8ef6-4a3a770ba96d.png"  alt="create an event"/><br /></td>
  <td align="center"><a href="https://github.com/michaelfswann"><img src="https://user-images.githubusercontent.com/70764326/106626547-b9eca100-656f-11eb-970e-bd9895789bb0.png"  alt=""/><br /></td>
  </tr>
</table>

- Organisers can track the attendance to a specific event.

![eVenture-organiser-view-of-a-specific-event](https://user-images.githubusercontent.com/70764326/106626276-7003bb00-656f-11eb-82c1-384ef7443abe.png)

 If you want to see the frontend code of this application head to this [repository](https://github.com/vmilitaru/eVenture-client.git).
 
## Live Project

Here is the [deployed version](https://eventure.vercel.app/).

## Stack

- [Node](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [Nodemailer](https://nodemailer.com/about/)
- [Docker](https://www.docker.com/)
- [Auth0](https://auth0.com/)
- [Cloudinary](http://cloudinary.com/)
- [AWS](https://aws.amazon.com/)

## Getting Started


1. Make sure that you have Node.js installed and clone the repo.

```bash
git clone https://github.com/vmilitaru/eVenture-server.git
cd into the folder
```

2. Next, install all the package dependencies to run the app

```bash
npm install
# or
npm i
```

## Configuring a Database on Heroku

3. Go to [heroku](https://signup.heroku.com/login) and sign up for a free account.

4. Create a new app, give it a name and select the region.

5. Navigate to the resources tab of your new app.

6. In the Add-ons search bar, type postgres and select Heroku Postgres.

7. Select the `Hobby Dev - Free` plan and click `Submit Order Form`.

8. Click the link to `Heroku Postgres`, this will open a new tab.



## Configuring Cloudinary

9. Go to [cloudinary](http://cloudinary.com/) and sign up for a free account.
10. To configure the cloudinary object you will need to add your cloudinary credentials such as `Cloud name`, `API Key` and `API Secret` displayed in the _Dashboard_ tab as enviroment variables.

11. Make sure that on your cloudinary account you have an _upload-preset_ called `event-setups`.It is basically the place where you want to store the uploaded images. You can always change the _upload-preset_ name into something else but once you do that you need to update as well the cloudinary function that sits in the models folder to matches the new _upload-preset_ name.

12. Go to _Settings>Upload_ and scroll down until you see the _Upload presets_ section and click _Add upload preset_ link.

13. Configure the following settings:
    - _Upload preset name_ and _Folder_- should be `event-setups`

14. Everything else can stay as default and  click _Save_.

15. Now, under _Upload presets_ section, next to `ml_default` you should be able to see also the `event_setups` upload-presets folder. 
16. Save the settings.

## Configuring Auth0

17. If you haven't already set up an Auth0 application please head to the frontend [repository](https://github.com/vmilitaru/eVenture-client.git) of this project and in the README document you will find all the steps needed to complete this.


### Set up environment variables

To connect the server with your Heroku databse, Auth0, Cloudinary and Nodemailer you'll need to add the relevant settings from your applications as environment variables.

18. Copy the content of `.env.example` into a new file called `.env.local`.

Then, open `.env.local` and add the missing environment variables:

- `PGHOST`, `PGUSER`, `PGDATABASE`, `PGPASSWORD` and `PGPORT` - Can be found in the _Heroku Dashboard>Your App>Overview>Heroku Postgres>Settings_ under _View Credentials_
- `AUTH0_DOMAIN` and `CLIENT_ORIGIN_URL`- Can be found in the Auth0 dashboard under _Applications_ ,select the created Application and go to `settings`
- `AUTH0_AUDIENCE` - Can be found in the Auth0 dashboard under _APIs_ ,got to `settings` tab and copy the _Identifier_
- `EMAIL_ADDRESS` - this is needed to send the confirmation email of the event to which a participant has registered - you can use your own email address or create a new one
- `EMAIL_PASSWORD` - email password
- `CLOUDINARY_NAME`, `CLOUDINARY_KEY` and `CLOUDINARY_SECRET` - Can be found in the Cloudinary dashboard 



## Available Scripts

In the project directory, you can run:

```bash
npm run dev # runs the server
```
```bash
npm run create-events-table #creates the events table
```
```bash
npm run create-tickets-table #creates the tickets table
```


## Contributors ✨

<table>
  <tr>
    <td align="center"><a href="https://github.com/fadumoaideed"><img src="https://avatars0.githubusercontent.com/u/71390607?s=60&v=4" width="120px;" alt=" Fadumo avatar"/><b>Fadumo Aideed</b></a></td>
    <td align="center"><a href="https://github.com/vmilitaru"><img src="https://avatars0.githubusercontent.com/u/70764326?s=120&v=4" width="120px;" alt="Valentina avatar"/><b>Valentina Militaru</b></a></td>
   <td align="center"><a href="https://github.com/Cpanda3"><img src="https://ca.slack-edge.com/T6L933W4X-U019WPN4M51-380f3738d180-512" width="120px;" alt="Amelia-avatar"/><b>Amelia Collins-Patel</b></a></td>
   <td align="center"><a href="https://github.com/Teeenbe"><img src="https://ca.slack-edge.com/T6L933W4X-U019WQM1Q4V-183cc3dedaa7-512" width="120px;" alt="Tom-avatar"/><b>Tom Bennet</b></a></td>
  <td align="center"><a href="https://github.com/michaelfswann"><img src="https://avatars3.githubusercontent.com/u/20445671?s=64&v=4" width="120px;" alt="Michael-avatar"/><b>Michael Swann</b></a></td>
  </tr>
</table>



