# Backend_Coding_Challenge
## Description 
Gemography backend-coding-challenge is about creating REST microservice that list the languages used by the 100 trending public repos on GitHub.

- For every language, we need to calculate the attributes below 👇:
  -Number of repos using this language
  -The list of repos using the language
# Notes: 
 -still learning about microservices so I develop the challenge using RESTfull API "Monolithic App"
# Technologies used
 ```
 - Express     :  a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications
 - node-fetch  : A light-weight module that brings window.fetch to Node.js
 
 ```
# Requirements
```
- POSTMAN 
- Install Node.js 

```
# Install
```
1.clone the project git clone https://github.com/ahmed2nabil/Backend_Coding_Challenge.git
2.cd into project directory cd Backend_Coding_Challenge
3.Intsall the dependencies npm install.
4.Run the App  npm start 

-Now the API is working on http://localhost:3000/

```

# Entry points
| Entry point	  |description  
|---------------|-----------------------------------------------------------------------------------
| /AllListRepos	|list all languages in 100 trending github repos and Name of repos in each language.|
