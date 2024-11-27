# Plavno Shared Components

UI Components for React.js library based projects

## Settings

Example package.json configuration

```jsx
{
  "dependencies": {
    "shared-components": "git+ssh://git@github.com:plavno-plavno/plavno-shared-components.git#main"
  }
}
```

## Installation

After setting up, run

```jsx
npm install
```

## Import

Importing a shared component into a project component

```jsx
import { Jumbotron } from 'shared-components';
```

## Add New Component

If you have a new component, follow these steps to add it to the repository

1. Create new branch (for example, "features/component-name") from "main" branch
2. Push the new component in the "src/components/shared" folder
3. Add a README.md file to the new component folder and describe how it is used, add examples
4. Run command "npm run build". You can also perform a local check. Run "npm link"
5. Push new branch with the component to repository, for example "git push --set-upstream origin features/component-name"
6. Create a "Pull request" for new updates

## Update or add configuration

If you have updated or new configuration files (vite.config, tsconfig, etc.), follow these steps to update them in the repository

1. Create new branch (for example, "features/new-configuration") from "main" branch
2. Update the README.md file if necessary
3. Run command "npm run build". You can also perform a local check. Run "npm link"
4. Push updates to the repository, for example "git push --set-upstream origin features/new-configuration"
5. Create a "Pull request" for new updates
