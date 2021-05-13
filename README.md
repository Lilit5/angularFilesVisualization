# Files Visualization

Files Visualization is an application which visualizes given items(folders/files) as they would on operating systems (such as Windows/Mac OS)

## Installation

Use the following commands to install all the dependencies.

```bash
cd files-visualization
npm i
```

## Usage

You can run tha app useing the following command
```bash
npm start
```

## Features
Currently application supports following features:

* Visualize each item containing full path of file, size, last modification date and type of item.
* Back navigation (navigate parent directory)
* Navigate to folder by double clicking on it.
* Search among all nested directories and files.
* Show current directory full path.

And some additional features:
* Main screen with possibility to choose OS type
* Pages Routing
* Refresh page button
* Default 'not found' page for non existing urls
* mocking json data using 'json-server' (half-implemented. needs some clarification)
