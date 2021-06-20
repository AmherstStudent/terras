
<!-- PROJECT LOGO -->
<br />
<p align="center">
 

  <h1 align="center">Terras</h1>

  <p align="center">
    the amherst student's main website (monorepo) next.js in front, wordpress back!
    <br />
    <a href="https://github.com/amherststudent/terras"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://amherststudent.com">View Demo</a>
    ·
    <a href="https://github.com/amherststudent/terras/issues">Report Bug</a>
    ·
    <a href="https://github.com/amherststudent/terras/issues">Request Feature</a>
  </p>
</p>

[![GitHub license](https://img.shields.io/github/license/AmherstStudent/terras)](https://github.com/AmherstStudent/terras/blob/master/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/AmherstStudent/terras)](https://github.com/AmherstStudent/terras/stargazers)[![Stargazers][stars-shield]][stars-url]
[![GitHub issues](https://img.shields.io/github/issues/AmherstStudent/terras)](https://github.com/AmherstStudent/terras/issues)
[![GitHub license](https://img.shields.io/github/license/AmherstStudent/terras)](https://github.com/AmherstStudent/terras/blob/master/LICENSE)


<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

## About The Project
Terras, the monorepo for amherststudent.com (derived from Postlight headless project) which utilizes DockerCompose to spin up the following services: 


1.  A [WordPress backend](admin.amherststudent.com/) that serves its data via the [WP REST API](https://developer.wordpress.org/rest-api/) and [GraphQL](http://graphql.org/)
2.  A server-side rendered React frontend using [Next.js](https://github.com/zeit/next.js/) powered by the WP GraphQL.
3. Nginx with LetsEncrypt,


### Built with: 
* Next.js rendering articles
* Docker-Compose 
* WordPress for creating articles


## Getting Started

To run this on your local device, you'll need to first install the prequestio 

### Prerequisites
* Yarn
* Docker (brew install docker)
* nvm (install version latest)

1. Setup Git (and Github) on your computer
2. Install node.js on your computer as well (preferably use install nvm)!
3. Install Yarn as well. 
4. Download Docker onto your computer
5. Go to your terminal and run ```git clone git@github.com:AmherstStudent/terras.git```
6. in your terminal `cd frontend/ && yarn && yarn dev`
7. Go to localhost:3000!


## Usage 

Currently, the easiest thing to work on is the frontend. Documentation for the backend is coming. 

When you want to run locally, go to your terminal cd to the location where terras is, and type `yarn dev`. This will allow you to develop locally.

## Roadmap 
See the [open issues](https://github.com/AmherstStudent/terras) for a list of proposed features (and known issues).

## Contributing 

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Clone the project (`git clone git@github.com:AmherstStudent/terras.git`)
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->
## Contact

Original Dev - @dmomplaisir
Contact our email at astudent@amherst.edu



---
🔬 A Amherst Student project from your fellow classmates, email [The Amherst Student](mailto:astudent@amherst.edu). Happy coding!

