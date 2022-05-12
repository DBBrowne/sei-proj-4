# Heard
Find live music near you!

[![Prod](https://github.com/DBBrowne/sei-project-four-frontend/actions/workflows/test-main.yml/badge.svg)](https://github.com/DBBrowne/sei-project-four-frontend/actions/workflows/test-main.yml) [![Dev](https://github.com/DBBrowne/sei-project-four-frontend/actions/workflows/test-dev.yml/badge.svg)](https://github.com/DBBrowne/sei-project-four-frontend/actions/workflows/test-dev.yml)
## Contents
- [Title](#title)
- [Demos](#demos)
- [Usage](#usage)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
    - [Running Tests](#running-tests)
- [Links](#links)
- [Overview](#overview)
    - [System Design](#system-design)
    - [Core Behaviour](#core-behaviour)
    - [Project History](#project-history)
        - [Brief](#brief)
        - [Planning](#planning)
        - [Wireframes](#wireframes)
        - [Project Plan](#project-plan)
        - [Build Execution](#build-execution)
    - [Known Bugs](#known-bugs)
    - [Challenges](#challenges)
    - [Wins](#wins)
    - [Future Features](#future-features)
    - [Key Lessons](#key-lessons)
- [Team Members](#team-members)

## Demos

## Usage

### Heard
Overview usage

## Technologies
|React<br>JavaScript|Django<br>Python<br>postgreSQL|
|---|---|

- [ReactJS Frontend](https://github.com/DBBrowne/sei-project-four-frontend)
- [Python/Django Backend](https://github.com/DBBrowne/sei-project-four-backend)

## Getting Started
These instructions will run a copy of the project on your local machine for development and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.

#### Running Locally
Set env variables:
Duplicate env.example and env.private.example:
```console
:<repo-root>$ cp env.example env && cp env.private.example env.private
```
Set any blank variables.


No environment variables are necessary.

Install dependencies with npm:
```console
:<repo-root>$ npm i
```
Run with:
```console
:<repo-root>$ npm run dev
```

#### Deployment
build to `/build/` :
```console
:<repo-root>$ npm run build
```
To deploy with netlify:
```console
:<repo-root>$ netlify deploy --dir=build
```
Set ENV vars.

### Running Tests

## Links

****

## Overview

## System Design

## Core Behaviour

## Project History

### Brief

### Planning

### Wireframes
|![Desktop](https://user-images.githubusercontent.com/72463218/168068627-1d7d8ac0-adbd-46ba-8c50-e9ac3e6c5a59.png)|![Mobile](https://user-images.githubusercontent.com/72463218/168068692-b0bf9632-426e-47e7-947e-72f9f0a8b7c3.png)|
|---|---|
### Implementation Notes

### Project Plan

### build-execution

## Known Bugs
 - date locale locked to en-GB to simply testing.  Restructure to permit local dates.
## Challenges

## Wins

## Future Features

## Key Lessons

## Team Members
- [Duncan Browne](https://github.com/DBBrowne)