# Component Library

A component library workspace based on the Node version of Pattern Lab. 

## Installing


    ```
    npm install
    grunt patternlab:build
    ```

## Helpful Commands

These are some helpful commands you can use on the command line for working with Pattern Lab.

### List all of the available commands

To list all available commands type:

    grunt patternlab:help

### Generate Pattern Lab

To generate the front-end for Pattern Lab type:

    grunt

### Watch for changes and re-generate Pattern Lab

To watch for changes, re-generate the front-end, and server it via a BrowserSync server,  type:

    grunt patternlab:serve

BrowserSync should open [http://localhost:3000](http://localhost:3000) in your browser.

### Install a StarterKit

To install a specific StarterKit from GitHub type:

    npm install [starterkit-vendor/starterkit-name]

    grunt patternlab:loadstarterkit --kit=[starterkit-name]
