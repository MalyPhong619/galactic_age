# Galactic Age Calculator

## Description

A solar year lasts 365 days on planet Earth. However, the length of a solar year varies from planet to planet. This application will allow the user to determine what their average life expectancy is on Mercury, Venus, Mars, and Jupiter.

#### By Maly Phongsavanh, March 15 2019

## Setup on OSX

* Install Node.js
* Install karma-cli globally:
  * `npm install -g karma-cli`

* Clone the repo
  * https://github.com/MalyPhong619/galactic_age.git

* Install Dependecies
  * `npm install`

* To build and start the dev server
  * `npm run start`

* To explicitly run ESLint
  * `npm run lint`

* To run the unit tests with Karma and Jasmine.
  * `npm run test`

    Visit `localhost:9876` to view the tests.


## Specs

| Behavior | Input | Output |
|--------|--------|--------|
| User inputs his/her age| 29 years old | 29 years old|
| User inputs average life expectancy on Earth | 72 years | 72 years |
| Calculator gives age on Mercury based on user age | 29 years old | 120 years old|
| Calculator gives age on Venus based on user age | 29 years old | 145 years old|
| Calculator gives age on Mars based on user age | 29 years old | 15 years old|
| Calculator gives age on Jupiter based on user age | 29 years old | 2 years old|
| Calculates days left on Earth | 29 years old | 43 years left|
| Calculates how many years passed life expectancy | 80 years old | 8 years over life expectancy|

## Contribution Requirements

1. Clone the repo
1. Make a new branch
1. Commit and push your changes
1. Create a PR

## Technologies Used

* JavaScript
* Node.js
* jQuery 3.3.1
* Babel
* Webpack
* ESLint
* Jasmine
* Karma

## Support and contact details

If there are any _questions_ or would like to contribute to the code, please feel free to email:

_[Maly Phongsavanh](mailto:phongsavanh619@icloud.com)_

## License

This software is licensed under the MIT license.

Copyright (c) 2019 **Maly Phongsavanh**
