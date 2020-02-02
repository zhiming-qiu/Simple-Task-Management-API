# Simple-Task-Management-API
A REST API for managing simple personal tasks.


## Preparation

* Ensure node version manager `nvm` is installed
* Ensure node version is set to a proper version (eg 8.9.3) via `nvm install 8.9.3 && nvm use 8.9.3`
* Ensure module `swagger` is installed via `npm install -g swagger`
* Ensure dependency for project is install via `cd task-manager && npm i`


## Start service

```
swagger project start task-manager
```

## Start doc page
```
swagger project edit task-manager
```

Browser will open a page for you to explore API. For now there is only two API: `GET/tasks` and `PUT/tasks`
