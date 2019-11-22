# Crossing Streams
Make your videos free

## How it works
A tool that you can use to create dynamic engaging videos for your friends, family and why not: your students and clients?

With Crossing Streams you can get to edit your video journey in few seconds. First you get to website, put your e-mail adress and the video id (Now only Youtube is supported)... Open your e-mail you will have 3 informations there: your editing link, the embeding code and the video stats link! put the embed wherever you want, click the edit link and there you go, add activities to your video, options to each activity type and there you go, whoever access the embed code will be seeing what you have done *and* you can follow the updates on the statistics page!

## How it is made
CrossingStreams is made with Django Framework as it's API provider and a ReactJS Frontend with, for now, Bootstrap based UX/UI

## How much it costs?
For now, we still don't have a business model, but be one of our early adopters and you can be sure you won't regret it ;) later because you are the most important person here right now!

#### I want details!!
Ok, let's explore a little more the details of the stack, first, the Backend:
* Django Framework
* PostgreSQL Database 
* Unittest tests
* RestFramework 
And the Frontend:
* ReactJS
* React Bootstrap 
* AxiosJS 
* React Youtube

#### Hmm, and how the Frontend project is organized?
Right now we have 3 view made with ReactJS:
1. Create
2. Edit
3. Statistics 
Beside that, you 

#### Ok,I want more! What about the data structure?
Well, Crossing Streams is organized in a pretty straight forward data structure and right now reflected on a SQL database with the following entities:
* Video
* Activities
* Options
* Actions

#### And what about tests?
Well, you got me on that one, this week! But not for long. Crossings Streams will start to be tested through a Unit tests suite in Django and the React Components through Test Utils. It will happen right after we have a deploy pipeline set, believe me!

#### Right, I heard that before, so... what is next?
Next will be:
1. Finish some editor features missing (Option edition and action live visualization)
2. Finish the Statistics
3. Fix Dockerfiles and create a deployment plan
4. Put the code under CI/CD with full test suite of what is done
5. Deploy and start next iteration with new features

#### What new features we are talking about?
* New activities (Open CYOA video to follow up dynamic contents!)
* Security measures to avoid video hacking!!!
* Chatbot activity
* Explore overlay options
* Work with branding on overlays
* ... more! much more!

## CONTRIBUTING

You can help Crossing Streams to grow! please contact me for more details as by now, we don't have a contributing specific method!


