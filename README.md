
<img align="right" src="./favicon-32x32.png">

# [movingtohttps.com](https://movingtohttps.com/)

A community site to help site owners migrate to HTTPS.  
Offers options to select platform, hosting and control level over the site.

## Development

All content for the guide is inside the index.html file. It uses template attributes around content to select which platform/hosting/control filters show which areas.

Available filters are setup in the js/app.js file, this also controls the app start up and setting the url for quick sharing based on the selected filters.

The app is built with [Vue.js](https://vuejs.org/) to give a basic framework for filter combinations and changing the templated content. 
If you're interested to learn Vue.js, Laracasts has a great free course: [Learn Vue 2: Step By Step](https://laracasts.com/series/learn-vue-2-step-by-step).

We use a simple service worker and manifest file to provide offline access.  
This project is also optimised for print / pdf generation.

## Contributing

I'd love to see this project grow to cover many more platforms, hosting providers and more.  
Got a platform or provider you think we should cover? Open an Issue with details or dive in and fork the project for your changes, then open a pull request to submit the changes back to us!  
Also please open issues or pull requests for any changes to existing content. 

Submitting JS changes?  
Check syntax with: `eslint **/*.js`

Interested to help in other ways? Get the word out by sharing the project. [#movingtoHTTPS](https://twitter.com/hashtag/movingtoHTTPS)

## FAQ

**Why build another guide?** - Most the guides out there were great but were platform or provider specific. Also they often made assumptions about the users level of skill / control over the site. 
This guide helps by allowing you to filter the content to suit your needs.

**Will this guide be kept up to date?** - It's a community site so feel free to contribute. I'll try to review the submissions for changes quickly so you can keep this as a reliable & up to date source.

**What's with the owl?** - It's the [SSowL](https://twitter.com/theSSowL) who'll help guide you through the migration process. 

