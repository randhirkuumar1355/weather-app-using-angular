# Weather App Using Angular
WeatherApp is a dynamic and user-friendly application developed using the Angular framework, designed to provide users with accurate and up-to-date weather information. With its intuitive interface and robust functionality, the WeatherApp offers a seamless experience for users to access weather forecasts and conditions for any location around the globe. In summary, WeatherApp, built using Angular, is a feature-rich and visually appealing weather application that provides users with accurate and up-to-date weather information. With its user-friendly interface, comprehensive forecasts, customizable notifications, and support for multiple locations, the app offers a delightful experience for users to stay informed about weather conditions and make informed decisions for their daily activities.

## Prerequisites
### Angular
To ensure a smooth development process and optimal performance for an Angular project, it is recommended to have the following prerequisites in place:
1. Install Node.js: Angular requires Node.js and npm (Node Package Manager) to be installed on your machine. Visit the official Node.js website (https://nodejs.org) and download the LTS (Long Term Support) version suitable for your operating system. Run the installer and follow the instructions to complete the installation.
2. Verify Node.js and npm installation: Open a command prompt or terminal and type the following commands to verify that Node.js and npm are installed correctly:
 ```bash
    node -v
 ```
  ```bash
    npm -v
 ```
 3. Install Angular CLI: Angular provides a Command Line Interface (CLI) tool that simplifies the development process. Install the Angular CLI globally by running the following command in your command prompt or terminal:
  ```bash
    npm install -g @angular/cli
 ```
 4. Verify Angular CLI installation: After the installation is complete, verify that the Angular CLI is installed correctly by running the following command:
   ```bash
    ng version
 ```
 5. Create a new Angular project: To create a new Angular project, navigate to the desired directory in your command prompt or terminal and run the following command:
  ```bash
    ng new project-name
 ```
Replace "project-name" with the desired name for your project.

6. Navigate to the project directory: Change your working directory to the newly created project folder using the following command:
  ```bash
    cd project-name
 ```
7. Run the development server: Start the development server to run and test your Angular application by running the following command:
  ```bash
    ng serve
 ```

# Weather App API Documentation
To use the "https://api.weatherapi.com" Open API in an Angular app, you can follow these steps:
1. Sign up and obtain an API key: Visit the WeatherAPI website (https://www.weatherapi.com) and sign up for an account. Once you have an account, navigate to the API section and generate an API key. This key will be required to access the WeatherAPI services.
2. Create a service file: In your Angular project, create a new service file to encapsulate the logic for making API requests. Run the following command in your terminal to generate the service file:
  ```bash
    ng generate service weather
 ```
3. Import HttpClient: Open the generated weather.service.ts file and import the HttpClient module from @angular/common/http:
  ```bash
    import { HttpClient } from '@angular/common/http';
 ```
4. Inject HttpClient: Inject the HttpClient module in the constructor of the service:
  ```bash
    constructor(private http: HttpClient) { }
 ```
5. Make API requests: Add a method in the service to make API requests to the WeatherAPI. For example, to get the current weather by location, you can define a method like this:
  ```bash
  getCurrentWeather(location: string) {
  const apiKey = 'YOUR_API_KEY';
  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`;
  return this.http.get(url);
}
 ```
Replace 'YOUR_API_KEY' with the API key obtained from the WeatherAPI website.
6. Use the service in a component: In your Angular component where you want to fetch weather data, import the service and inject it in the constructor:
  ```bash
import { WeatherService } from './weather.service';

constructor(private weatherService: WeatherService) { }
}
 ```
7. Make API requests from the component: Call the getCurrentWeather method from the service in your component, passing the desired location as an argument:
  ```bash
import { WeatherService } from './weather.service';

constructor(private weatherService: WeatherService) { }
}
 ```
8. Handle the weather data: In the subscribe method, you can handle the received weather data according to your application's requirements. Update your component's properties or render the data in the template as needed.

Remember to import the necessary modules in your app module or respective feature modules, such as HttpClientModule from @angular/common/http.
