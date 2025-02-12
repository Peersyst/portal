# Base project

### Configuration

Configuration files (.env) are project and package specific.

##### Project

Project configuration has the configuration for spinning up the docker dependencies.

For dev environment you can use this one:

```
DB_PORT=3306
DB_USER=db_user
DB_PASSWORD=db_password
DB_DATABASE=db_database
```

For e2e environment you can set this one:

```
DB_PORT=3306
DB_USER=db_user
DB_PASSWORD=db_password
DB_DATABASE=db_database

BACKEND_PORT=3001
```

#### Package

This configuration is related specifically to each project. It goes to the root of each package.

For backend package you can use:

```
APP_PORT=3001
APP_HOST=http://localhost
APP_JWT_KEY=secret
APP_ENCRYPTION_KEY=rPGL/acJe6f5CmCGn05bec6oS2+jmyFnHFIwZblZCgE=
APP_ENABLE_SWAGGER=1
APP_ENABLE_CORS=1

DB_HOST=db # Change this to "localhost" if you are running in dev mode (not dockerized backend)
DB_PORT=3306
DB_USER=db_user
DB_PASSWORD=db_password
DB_DATABASE=db_database
```

For frontend package you can use:

```
REACT_APP_BACKEND_URL=http://localhost:3001
REACT_APP_NAME=$npm_package_name
```

## Monorepo guide

Here's a guide to understand and work with efficiency on this monorepo project.

### Apps vs Packages

To start with, you need to understand the differences between the `apps` and `packages` folders:

-   `packages`: Contains local packages that are shared between the apps in the `apps` folder. Every package needs to have a unique name and export its contents. All packages are managed by a [yarn workspace](https://classic.yarnpkg.com/lang/en/docs/workspaces/). You can consider this folder as a set of tools for apps (including mobile, APIs or indexers) development.

-   `apps`: Contains all the apps of the project. They can be mobile apps, APIs or indexers. An app can use the local packages stored in the `packages` folder.

### Installing dependencies

To start developing on this monorepo project, you will need to install the project dependencies from the root directory.

```
yarn
```

By running this command, root development dependencies and `packages` dependencies will be installed (since it is a workspace). To install `apps` dependencies, you can run the `bootstrap` command.

```
# Bootstraps all apps dependencies
yarn bootstrap

# Bootstraps specified app dependencies
yarn bootstrap <app>
```

### Test and lint apps

To test and lint your apps you can run the following scrips in the root package.json:

```
# Linting an app
yarn lint <app>

# Testing an app
yarn test <app>
```

### Clean dependencies

To clean dependencies, `build` or `dist` folders within an app, you can execute the `clean` script in the root directory:

```
yarn clean <app>
```

In case you want to clean everything in the project you can execute the `clean:all` script.

```
yarn clean:all
```
