## Task Calculator

This is a service that request aritimethical tasks to an api, calculate, validate and add them to a dashboard.


## Run
```
npm install
npm run start
```

The dashboard can be accessed in 
```
localhost:3000/dashboard
```

The dasboard will update each 5 secods

## Job
When the application is started, a job runs in background requesting the tasks, solving them and validating the results.

In the dashboard the interval o the task requests will be displayer at the top.

#### Execution Time: 1000 ms

A log is also generated when this change happens.
```
Task executed at 4:45:44 PM
```

## To Many Request scenario
In case of http status response 429, the task running in background is rebuilded with time added between the calls.

A log informs about the situation
```
adding delay, from 1000ms to 2000ms
```

## Errors
In case of undesired httpstatus response, some logs will be created
```
'Error status:' 400
```
```
'Error data:' Incorrect.
```


## Configurations
.env file contains the configurations

* PORT: port of the application
* POOLING_MILLISECONDS: time between api calls
* TO_MANY_REQ_DELAY: delay to be added in cases of 429 http status
* TASK_URL: external api url


## Improvements
* ESLint could be used more propertly.
* Better tests are necessary.
* Some JS/TS commom patterns probably where not followed.
* Dashboard update time should be externilized or configurable by api